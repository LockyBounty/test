from flask import Flask
from flask import abort, redirect, url_for,render_template
app = Flask(__name__)

@app.route('/')
def index():
    return "index"

@app.route('/hello/<name>')
def hello(name=None):
    return render_template('index.html', name=name)



