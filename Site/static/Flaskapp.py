from flask import Flask
from flask import render_template

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    #return (
        # f"Welcome to the Phx Software Companies <br/>")
    return render_template('index.html')
    
if __name__ == "__main__":
    app.run(debug=True)



