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
    result = flask.request.args.get("q")
    return page_html.replace("$$username$$",result)


def add_note(text):
    file = open("note.txt", "a")
    file.write(text + "\n")
    file.close()


def search_note(text):
    file = open("note.txt")
    content = file.read()
    file.close()

    result = ""
    notes = content.slpit("...")
    for note in notes:
        if note.find(text) != -1:
            result += "\n..." + note
    if result == "":
        print("Nothing found")
    else:
        print(result)

def get_note():
    file = open("note.txt")
    content = file.read()
    file.close()
    note = content.split("\n")
    return note

@app.route("/Add")
def add():
    page_html = get_page("note.html")
    note = flask.request.args.get("a")
    news = add_note(note)
    # result = ""
    # for new in news:
    #     result += "<p>" + new + "</p>"
    getnote = get_note()
    final = ""
    for i in getnote:
        final += "<p>" + i + "</p>"
    return page_html.replace("$$NOTES$$",final)
    # return news

@app.route("/Search")
def search():
    page_html = get_page("note.html")
    note = flask.request.args.get("s")
    look = get_note()

    result = ""
    for i in look:
        if i.lower().find(note.lower()) != -1:
            result += "<p>" + i + "</p>"
    if result == "":
        result = "Nothing found"
    return page_html.replace("$$NOTES$$", result)

@app.route("/all")
def all_note():
    allnotes = add()
    return allnotes


    



