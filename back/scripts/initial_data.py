import sys
sys.path.insert(0, "")
from src.domain.product import ProductRepository, Product


database_path = "data/products-list.db"


scissor_socks = Product(
    id="product-1",
    name="Calcetines azules Sin Anestesia",
    description="Calcetines divertidos con motivos sanitarios de algodón, sin costuras y hechos en España!",
    price=22,
    image="https://www.enfermania.com/7716-large_default/calcetines-estampados-sin-anestesia.jpg",
)
sushi_socks = Product(
    id="product-2",
    name="Estampado shushi",
    description="Fabricados en españa, con la más esencia japonesa",
    price=12,
    image="https://sushiholics.net/wp-content/uploads/2020/11/calcetines-estampados-sushi.jpg",
)
healthy_socks = Product(
    id="product-3",
    name="Healthy",
    description="Estos calcetines, te recordarán que debes que debes cuidar tu salud",
    price=590,
    image="https://libreriamedica.es/90891-large_default/calcetines-estampados-healthy-tools-color-celeste.jpg",
)
harry_potter_socks = Product(
    id="product-4",
    name="Harry Potter",
    description="Estos calcetines, te darán la magia que tanto necesitas en tu vida",
    price=590,
    image="https://www.marlosonline.es/192299-superlarge_default/calcetines-harry-potter-2.jpg",
)

product_repository = ProductRepository(database_path)
product_repository.save(scissor_socks)
product_repository.save(sushi_socks)
product_repository.save(healthy_socks)
product_repository.save(harry_potter_socks)
