from flask import Flask

app = Flask(__name__)


def get_pages(page):
    file = open(page)
    content = file.read()
    file.close()
    return content



@app.route("/")
def welcome_page():
    return get_pages("page1.html")


def get_names():
    name = open("guestdb.txt")
    content = name.read()
    name.close()
    names = content.split("\n")
    # sort_names = names.sorted()
    return names

@app.route("/guests")
def guest_page():
    pagee_html = get_pages("pagee.html")
    names = get_names()
    actual_value = ""
    for name in names:
        actual_value += "<p>" + name + "</p>"
    return pagee_html.replace("$$NAMES$$", actual_value)

# @app.route("/page1.html")
# def page1():
#     return get_pages("page1.html")

