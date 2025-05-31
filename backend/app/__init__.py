from flask import Flask
from .extensions import db, jwt
from .routes.auth import auth_bp
from .routes.protected import protected_bp

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')
    
    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    
    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(protected_bp, url_prefix='/api')
    
    return app