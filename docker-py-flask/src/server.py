import os
from dotenv import load_dotenv
load_dotenv()
from flask import Flask
# from waitress import serve

app = Flask(__name__)

@app.get("/")
def hello_world():
  return {
    "message": "Hello, Docker!"
  }

if __name__ == "__main__":
    
    PORT = os.getenv("PORT")

    print(f"Server online @ http://localhost:{PORT}")

    app.run(host="0.0.0.0", port=PORT, debug=True)        #DEV
    # serve(app, host="0.0.0.0", port=PORT)               #PROD
