from flask import Flask, render_template, request, redirect, url_for
from models import db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://bruikey03:japan@tokyo@10.160.0.5:5432/bruikey03'

db.init_app(app)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/js/sign_up.js', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')

        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('index'))

    return render_template('sign_up.js')


if __name__ == "__main__":
    app.run(debug=True)
