from flask import Flask, render_template, request, redirect, url_for
from models import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://bruikey03:cigaftersex@34.93.154.219:5432/users'

db.init_app(app)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/signup', methods=['POST', 'GET'])
def signup_send():

    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')

        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('index'))
    return render_template('signup.html')

if __name__ == "__main__":
    app.run(debug=True)
