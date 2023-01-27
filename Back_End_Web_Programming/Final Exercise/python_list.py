def return_HTML():
    file = open("html_page.html")
    content = file.read()
    file.close()
    return content

def return_html():
    page = return_HTML()
    page_split = page.split("\n").strip()
    return page_split

print(return_html())
