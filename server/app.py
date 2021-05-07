from logging import exception
from requests.sessions import Session
import config
import os

from datetime import date
from flask import Flask, jsonify, send_from_directory, request, url_for, session, redirect, make_response
from flask.json import JSONEncoder
from flask_cors import CORS

#--------------extra imports
import spotipy
from spotipy.oauth2 import SpotifyAuthBase, SpotifyOAuth
import time
#TODO: Check if CORS is properly set in vue

class CustomJSONEncoder(JSONEncoder):
    """Use ISO 8601 for dates"""

    def default(self, obj):  # noqa: E0202
        try:
            if isinstance(obj, date):
                return obj.isoformat()
            iterable = iter(obj)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj)


app = Flask(__name__)
app.json_encoder = CustomJSONEncoder
app.config["SECRET_KEY"] = config.flask_secret_key
app.config['SESSION_COOKIE_NAME']= 'Spoti-fi Cookie'
app.config['SESSION_COOKIE_HTTPONLY'] = True
cors = CORS(app, origins=['http://localhost:5000', 'http://localhost:8080'], supports_credentials=True)
# cors = CORS(app, origins=[config.api_endpoint, config.frontend_url], supports_credentials=True)
TOKEN_INFO='token_info'


@app.route("/api/file/<string:filename>")
def images_get(filename):
    return send_from_directory(config.image_upload_folder, filename)


from views.authentication import *  # noqa
from views.posts import *  # noqa
from views.subvues import *  # noqa
from views.users import *  # noqa
import errors  # noqa

@app.route('/')
def basic():
    return redirect('spotlogin')

#----------------------------------SpotifyOauth--------------
@app.route('/spotlogin')
def spotlogin():
    #connect spotify account to the app
    sp_oauth= create_spotify_oauth()        #creates oauth token
    auth_url = sp_oauth.get_authorize_url()
    print(auth_url)
    return redirect(auth_url)       #redirects to the authurl which we specified in the create_spotify_oauth function

@app.route('/redirect')
def redirectpage():
    sp_oauth= create_spotify_oauth()
    session.clear()
    # print(request.json)
    # code = request.json.get("content")
    code = request.args.get('code')
    print('i got here first!!!!')
    token_info = sp_oauth.get_access_token(code)
    print('i reached here')
    session[TOKEN_INFO]=token_info
    response = make_response(redirect('/mainpageorsmth'))
    return "Go back and refresh the main page"

@app.route('/mainpageorsmth')
def mainpageorsmth():
    # print(get_token())
    try:
        token_info = get_token()
    except:
        print("user not logged in")
        return {"Error": "Not logged in", "logged_in": False, "url": url_for('spotlogin', _external=True)}

    sp = spotipy.Spotify(auth=token_info['access_token'],)
    # make_response allows to pass headers
    response = make_response(sp.current_user_recently_played(limit=10), 200)
    # Need to change the hard coded url 
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    # response.headers.add('Access-Control-Allow-Origin', config.frontend_url)
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

@app.route('/prevtracks')
def prevtracks():
    # print(get_token())
    try:
        token_info = get_token()
    except:
        print("user not logged in")
        return {"Error": "Not logged in", "logged_in": False, "url": url_for('spotlogin', _external=True)}

    sp = spotipy.Spotify(auth=token_info['access_token'],)
    # make_response allows to pass headers
    response = make_response(sp.current_user_recently_played(limit=10), 200)
    # Need to change the hard coded url
    
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    # response.headers.add('Access-Control-Allow-Origin', config.frontend_url)
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

@app.route('/currtracks')
def currtracks():
    # print(get_token())
    try:
        token_info = get_token()
    except:
        print("user not logged in")
        return {"Error": "Not logged in", "logged_in": False, "url": url_for('spotlogin', _external=True)}

    sp = spotipy.Spotify(auth=token_info['access_token'],)
    # make_response allows to pass headers
    # need to add error handling for curr playing false
    response = make_response(sp.current_user_playing_track(), 200)
    # Need to change the hard coded url 
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    # response.headers.add('Access-Control-Allow-Origin', config.frontend_url)
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

# @app.route('/current-track')
# def currentTrack():
#     try:
#         token_info= get_token()
#     except:
#         print("user not logged in")
#         return {"Error": "Not logged in", "logged_in": False, "url": url_for('spotlogin', _external=True)}
#     #print (token_info)
#     sp = spotipy.Spotify(auth=token_info['access_token'],)
#     return {"data": sp.current_user_playing_track(), "logged_in": True}


def get_token():
    token_info=session.get(TOKEN_INFO, None) #return none if token_info is empty
    if token_info == None:
        raise exception
    now = int(time.time())

    is_expired= token_info['expires_at'] - now < 60
    if (is_expired):
        sp_oauth= create_spotify_oauth()
        token_info= sp_oauth.refresh_access_token(token_info['refresh_token'])
    return token_info


#everytime you use spotifyoauth use a new one.
def create_spotify_oauth():
    return SpotifyOAuth(
        client_id = "0e5b6e912af94415ba75116ea413538e",
        client_secret="59b70f0753fb43cb9d0fc922af134897",
        redirect_uri=url_for('redirectpage', _external=True), #...../redirectpage/
        scope="user-top-read , user-read-currently-playing, user-read-recently-played")                   



#-----------------------------------Endspotify----------------

@app.errorhandler(404)
def page_not_found(e):
    return jsonify({
        "error": "API endpoint not found"
    }), 404


@app.errorhandler(500)
@app.errorhandler(405)
def internal_server_error(e):
    return jsonify({
        "error": "Internal server error"
    }), 500


@app.errorhandler(413)
def request_entity_too_large(e):
    return jsonify({
        "error": "To large (max. 1 MB)"
    }), 413



if __name__ == "__main__":
    ENVIRONMENT_DEBUG = os.environ.get("APP_DEBUG", True)
    ENVIRONMENT_PORT = os.environ.get("APP_PORT", 5000)
    app.run(host='0.0.0.0', port=ENVIRONMENT_PORT, debug=ENVIRONMENT_DEBUG)