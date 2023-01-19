from flask import Flask

app = Flask(__name__)

# app = flask.Flask("fruits")

def open_html_file(page_name):
    file = open(page_name + ".html")
    content = file.read()
    file.close()
    return content


def get_fruits():
    fruitsdb = open("fruitydb.txt")
    content = fruitsdb.read()
    fruitsdb.close()
    fruits = content.split("\n")
    return fruits

@app.route("/")
def home_page():
    index_html = open_html_file("index")
    fruits = get_fruits()
    actual_values = ""
    for fruit in fruits:
        actual_values += "<p>" + fruit + "</p>"
    return index_html.replace("$$FRUITS$$", actual_values)

@app.route("/ab")
def ab():
    return open_html_file("ab")

