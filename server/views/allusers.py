from flask import jsonify
from app import app
from models import User
from authorization import login_required


@app.route("/api/users")
def user_username():
    print("here")
    users = User.objects()
    return jsonify([user.to_public_json() for user in users])
    
