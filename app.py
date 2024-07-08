from flask import Flask, render_template

app = Flask(__name__)

# app.add_url_rule('/favicon.ico',
#                  redirect_to=url_for('static', filename='favicon.ico'))


@app.route("/")
def root():
    return render_template("home.html")
