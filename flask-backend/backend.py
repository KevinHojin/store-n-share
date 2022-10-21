import os
from flask import Flask, jsonify, request, json, send_file, send_from_directory
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/download", methods=['POST'])
def download():
    request_data = request.files['file']
    print(request_data.filename)
    #for i in range(len(request_data['content'])):
        #path=request_data['content'][i]['path']
    filename = secure_filename(request_data.filename)
    new_name = f'fresh_file'
        #uploads = os.path.join(path)
    saved = os.path.join('uploaded',new_name)
    request_data.save(saved)
    return send_file(saved, mimetype="*", download_name = 'fresh_file', as_attachment=True)
    #send_file(filename)
    print(filename)
    response = jsonify({'some': 'data'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return "response"

if __name__ == "__main__":
    app.run(debug=True)