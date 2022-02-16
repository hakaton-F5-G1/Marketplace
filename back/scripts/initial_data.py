import sys
sys.path.insert(0, "")
from src.domain.product import ProductRepository, Product



database_path = "data/products-list.db"


zapatillas_nike = Product(
    id="product-24",
    name="Zapatillas Nike deportivas",
    description="Nuevas a estrenar, solo las he usado 4 veces",
    price=22,
    image="https://www.invain.com/es-es/magazine/wp-content/uploads/2021/03/lo-ultimo-zapatillas-nike.jpg",
)
zapas_adidas = Product(
    id="product-91",
    name="Zapatillas Adidas deportivas",
    description="Nuevas a estrenar, solo las he usado 4 veces",
    price=22,
    image="https://www.invain.com/es-es/magazine/wp-content/uploads/2021/03/lo-ultimo-zapatillas-nike.jpg",
)
bicicleta_montañera_barata = Product(
    id="product-51",
    name="Bicicleta Montañera XTREME",
    description="Perfecta para subir entre senderos y no caerte",
    price=590,
    image="https://www.invain.com/es-es/magazine/wp-content/uploads/2021/03/lo-ultimo-zapatillas-nike.jpg",
)


product_repository = ProductRepository(database_path)
product_repository.save(zapas_adidas)
product_repository.save(zapatillas_nike)
product_repository.save(bicicleta_montañera_barata)
