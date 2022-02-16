from itertools import product
from flask import Flask, request
from flask_cors import CORS
from src.domain.product import Product
from src.lib.utils import object_to_json


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/", methods=["GET"])
    def hello_world():
        return "...magic!"

    @app.route("/api/products", methods=["GET"])
    def products_get():
        all_products = repositories["product"].get_products()
        return object_to_json(all_products)

    @app.route("/api/products", methods=["POST"])
    def product_save():
        data = request.json
        product = Product(**data)
        repositories["product"].save(product)
        return ""

    @app.route("/api/products/<id>", methods=["GET"])
    def product_get_by_id(id):
        product_by_id = repositories["product"].get_products_by_id(id)
        return object_to_json(product_by_id)

    @app.route("/api/product/<id>", methods=["DELETE"])
    def product_delete_by_id(id):
        product_deleted = repositories["product"].delete_product_by_id(id)
        return ""

    return app
