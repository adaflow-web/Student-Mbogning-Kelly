import flask

app = flask.Flask("param")

def get_pages(page):
    file = open(page)
    content = file.read()
    file.close()
    return content

@app.route("/")
def home():
    return get_pages("index1.html")


@app.route("/result")
def result():
    # message = flask.request.args.get("q")
    # note = flask.request.args.get("note")
    # return message + " : " + note
    return flask.request.args.get("q")