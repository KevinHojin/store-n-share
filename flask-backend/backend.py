import os
from flask import Flask, jsonify, request, json, send_file, send_from_directory
from werkzeug.utils import secure_filename
from flask_cors import CORS
from pathlib import Path


app = Flask(__name__, static_folder='Downloads')
CORS(app)

@app.route("/download", methods=['POST'])
def download():
    request_data = request.files['file']
    print(request_data)
    filename = secure_filename(request_data.filename)
    saved = os.path.join(app.static_folder,filename)
    request_data.save(saved)
    print("sending file.. ")
    #return send_file(saved, as_attachment=True)
    return send_from_directory('Downloads', filename, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)