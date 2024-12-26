from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
   return render_template("home.html")

if __name__ == "__main__":
    from gunicorn.app.base import BaseApplication

    class FlaskApplication(BaseApplication):
        # app.run(True)
        def __init__(self, app, options=None):
            self.application = app
            self.options = options or {}
            super().__init__()

        def load(self):
            return self.application

        def load_config(self):
            for key, value in self.options.items():
                self.cfg.set(key, value)

    options = {
        'bind': '0.0.0.0:5000',
        'workers': 2,
    }
    GunicornApp = FlaskApplication(app, options)
    GunicornApp.run()
