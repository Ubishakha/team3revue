from flask import jsonify, make_response
from app import app
from models import User
from authorization import login_required

cors = CORS(app, origins=['http://localhost:5000', 'http://localhost:8080', 'http://localhost:80'], supports_credentials=True)


@app.route("/users", methods=["POST"])
@login_required
def user_username(username):
    print("here")
    friends  = []
    users = User.objects()
    
    for user in users:
        friends.append(user.username)
    print(friends)
    response = make_response(friends)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return respose
    
