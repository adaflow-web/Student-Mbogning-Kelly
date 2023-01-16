from flask import Flask, request, render_template


app = Flask(__name__)


# def affiche_HTML(fichier):
#     file = open(fichier)
#     text = file.read()
#     file.close()
#     return text


@app.route("/")
def home():
    return " <html><body><h1>Hello World!</h1></body></html>"




# @app.route("/F")
# def home1():
#     return "<html><body><p><a href='page2.html'> Page 2</a></p></body></html>"

# @app.route("/page2.html")
# def page2():
#     return affiche_HTML("page2.html")

@app.route("/page2.html")
def page2():
    return render_template("page2.html", name = "Kelly")




