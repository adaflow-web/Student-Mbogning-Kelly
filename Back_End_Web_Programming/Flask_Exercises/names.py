import flask

app = flask.Flask("names")

def get_page(page):
    file = open(page)
    content = file.read()
    file.close()
    return content

@app.route("/")
def welcome_page():
    return get_page("welcome_page.html")

@app.route("/names")
def names():
    return get_page("names.html")

@app.route("/search")
def search():
    message = flask.request.args.get("q")
    return message
