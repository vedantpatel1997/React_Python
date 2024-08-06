from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/members', methods=['GET'])
def get_members():
    members = [
        {"name": "John Doe"},
        {"name": "Jane Doe"},
        {"name": "Someone Else"}
    ]
    return jsonify(members)

if __name__ == '__main__':
    app.run(debug=True)

