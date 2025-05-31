from app import create_app
from app.models import User, db

app = create_app()

@app.before_first_request
def create_tables():
    db.create_all()
    # Create a test user if not exists
    if not User.query.filter_by(username='test').first():
        test_user = User(username='test')
        test_user.set_password('test')
        db.session.add(test_user)
        db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)