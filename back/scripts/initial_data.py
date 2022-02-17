import sys
sys.path.insert(0, "")
from src.domain.product import ProductRepository, Product

database_path = "data/products-list.db"


bulldog_regalo_reikiavik = Product(
    id="product-1",
    name="bulldog marron de 2 años",
    description="Regalo bulldog marrón de 2 años por la zona de reikiavik, me he mudado y no puedo seguir cuidándolo por motivos de trabajo, muy cariñoso y muy niñero",
    price=0,
    image="https://www.nationalgeographic.com.es/medio/2019/09/09/bull-dog-ingles_043b09e1_800x800.jpg",
    mail="franciscojose@gmail.com",
    phone="691755232",
    city = "Reikiavik",
)
caniches_pedigree = Product(
    id="product-2",
    name="Caniches con pedigreé",
    description="Hace 1 semana, saqué una de las mejores camadas que he hecho en mi carrera como adiestrador, caniches muy inteligentes, muy obedientes.",
    price=350,
    image="https://www.diariodesevilla.es/2021/06/22/sociedad/Lista-razas-perros-esperanza-vida_1585651498_140354215_667x375.jpg",
    mail="luisitoeljefe@gmail.com",
    phone="611233214",
    city = "Gijón",
)
doberman_adopción = Product(
    id="product-3",
    name="Doberman negro adopción",
    description="Nos encontramos a este cachorro de doberman abandonado cerca de un bosque al lado de la carretera, lo hemos cuidado hasta que hemos visto que podría ir con otra familia, muy dócil e inteligente",
    price=1,
    image="https://www.elespectador.com/resizer/fAVJqvTeFKrKvkJzRnyGHVRf2ao=/920x613/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/XQ5OB4SRZ5B5LD7S7QIRCLHTVY.jpg",
    mail="libertarioriginal@gmail.com",
    phone="791223321",
    city = "Bilbao",
)


product_repository = ProductRepository(database_path)
product_repository.save(bulldog_regalo_reikiavik)
product_repository.save(caniches_pedigree)
product_repository.save(doberman_adopción)
