import http.server
import socketserver

port = 8000

handler = http.server.SimpleHTTPRequestHandler

my_web_server = socketserver.TCPServer(("", port), handler)

print("I will start with port " + str(port))

my_web_server.serve_forever()