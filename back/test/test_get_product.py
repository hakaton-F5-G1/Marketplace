from urllib import response
from src.lib.utils import temp_file

from src.webserver import create_app
from src.domain.product import ProductRepository, Product


def test_should_return_empty_list_of_products():

    # ARRANGE
    products_repository = ProductRepository(temp_file())
    app = create_app(repositories={"product": products_repository})
    client = app.test_client()
    # ACT
    response = client.get("/api/products")

    # ASSERT
    assert response.json == []


def test_should_return_product_in_database():

    # ARRANGE
    products_repository = ProductRepository(temp_file())
    app = create_app(repositories={"product": products_repository})
    client = app.test_client()

    zapatillas_nike = Product(
        id="product-24",
        name="Zapatillas Nike deportivas",
        description="Nuevas a estrenar, solo las he usado 4 veces",
        price=22,
        image="",
    )
    products_repository.save(zapatillas_nike)

    # ACT
    response = client.get("/api/products")

    # ASSERT
    assert response.json == [
        {
            "id": "product-24",
            "name": "Zapatillas Nike deportivas",
            "description": "Nuevas a estrenar, solo las he usado 4 veces",
            "price": 22,
            "image": "",
        }
    ]
