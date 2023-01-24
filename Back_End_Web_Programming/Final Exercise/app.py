import flask

app = flask.Flask("appnote")

def get_page(page):
    file = open(page)
    content = file.read()
    file.close()
    return content

@app.route("/")
def home():
    return get_page("index.html")

@app.route("/welcome")
def welcome():
    page_html = get_page("username.html")
    return flask.request.args.get(page_html+"q")