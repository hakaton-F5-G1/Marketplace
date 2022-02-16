from src.lib.utils import temp_file

from src.webserver import create_app
from src.domain.product import ProductRepository, Product


def test_should_return_product_by_id():

    # ARRANGE

    products_repository = ProductRepository(temp_file())
    app = create_app(repositories={"product": products_repository})
    client = app.test_client()

    zapas_nike = Product(
        id="product-24",
        name="Zapatillas Nike deportivas",
        description="Nuevas a estrenar, solo las he usado 4 veces",
        price=22,
        image="",
    )

    zapas_adidas = Product(
        id="product-91",
        name="Zapatillas Adidas deportivas",
        description="Nuevas a estrenar, solo las he usado 4 veces",
        price=22,
        image="",
    )

    products_repository.save(zapas_adidas)
    products_repository.save(zapas_nike)

    # ACT

    response = client.get("/api/products/product-24")

    # ASSERT
    assert response.json == {
        "id": "product-24",
        "name": "Zapatillas Nike deportivas",
        "description": "Nuevas a estrenar, solo las he usado 4 veces",
        "price": 22,
        "image": "",
    }
