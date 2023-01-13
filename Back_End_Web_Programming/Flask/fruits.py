import flask

app = flask.Flask("fruits")

@app.route("/")

def homepage():
    return "Welcome!!"
