from flask import jsonify
from app import app
from models import User
from authorization import login_required
# from flask_oauth import OAuth
from flask import session
from flask import redirect, url_for
from flask_dance.contrib.spotify import make_spotify_blueprint, spotify

blueprint = make_spotify_blueprint(
    client_id="24ccca945de24c6585489665bfa7521b",
    client_secret="ce62b08bb5e44ecc9856a4f6a01696f5",
    scope=['user-read-recently-played', 'user-read-email', 'user-read-private'],
    redirect_url='http://localhost:80/api/callback'
)
app.register_blueprint(blueprint)

@app.route("/api/auth-login")
def index():
    if not spotify.authorized:
        return redirect(url_for("spotify.login"))
    resp = spotify.get("/user")
    assert resp.ok
    return "You are @{login} on Spotify".format(login=resp.json()["login"])
    
@app.route("/api/callback")
def authed_handler():
    return "Authorized successfully!"