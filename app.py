from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ecg-data')
def ecg_data():
    value = random.randint(400, 600)
    return {"value": value}

if __name__ == '__main__':
    app.run(debug=True)