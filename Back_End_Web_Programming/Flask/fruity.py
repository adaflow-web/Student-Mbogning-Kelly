from flask import Flask

app = Flask(__name__)

# app = flask.Flask("fruits")

def open_html_file(page_name):
    file = open(page_name + ".html")
    content = file.read()
    file.close()
    return content
@app.route("/")
def home_page():
    index_html = open_html_file("index")
    return index_html

@app.route("/ab")
def ab():
    return open_html_file("ab")

