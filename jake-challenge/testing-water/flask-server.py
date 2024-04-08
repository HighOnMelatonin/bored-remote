from flask import Flask, request


def create_app():
    app = Flask(__name__)

    @app.post("/")
    def echo():
        for k,v in request.form.items():
            print(f"{k}: {v}")

        return ('keep it up :D', 200)
    
    return app


def main():
    create_app().run()


if __name__ == "__main__":
    main()