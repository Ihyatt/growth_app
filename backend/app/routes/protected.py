from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, current_user, get_jwt_identity

protected_bp = Blueprint('protected', __name__)

@protected_bp.route('/me', methods=['GET'])
@jwt_required()
def protected():
    current_identity = get_jwt_identity()
    return jsonify(logged_in_as=current_identity), 200