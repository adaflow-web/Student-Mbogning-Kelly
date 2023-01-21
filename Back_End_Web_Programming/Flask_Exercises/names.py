import flask

app = flask.Flask("names")

def get_page(page):
    file = open(page)
    content = file.read()
    file.close()
    return content

def get_names():
    file = open("namesdb.txt")
    content = file.read()
    file.close()
    names = content.split("\n")
    # names.pop(len(names)-1)
    return names

@app.route("/")
def welcome_page():
    return get_page("welcome_page.html")

@app.route("/names")
def names():
    html_page = get_page("names.html")
    names = get_names()

    actual_values = ""
    for name in names:
        actual_values += "<p>" + name + "</p>"

    return html_page.replace("$$NAMES$$", actual_values)

@app.route("/search")
def search():
    html_page = get_page("names.html")
    message = flask.request.args.get("q")
    names = get_names()

    result = ""
    for name in names:
        if name.lower().find(message.lower()) != -1:
            result += "<p>" + name + "</p>"
    if result == "":
        result = "<p> No result found </p>"
    return html_page.replace("$$NAMES", result)
