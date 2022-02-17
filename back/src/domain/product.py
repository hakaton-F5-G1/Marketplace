import sqlite3


class Product:
    def __init__(self, id, name, description, price, image,mail,phone,city):
        self.id = id
        self.name = name
        self.description = description
        self.price = price
        self.image = image
        self.mail = mail
        self.phone = phone
        self.city = city

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "image": self.image,
            "mail":self.mail,
            "phone":self.phone,
            "city":self.city,
        }


class ProductRepository:
    def __init__(self, database_path):
        self.database_path = database_path
        self.init_tables()

    def create_conn(self):
        conn = sqlite3.connect(self.database_path)
        conn.row_factory = sqlite3.Row
        return conn

    def init_tables(self):
        sql = """
            CREATE TABLE if not exists products (
            id text PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            price REAL NOT NULL,
            image TEXT NOT NULL,
            mail TEXT ,
            phone TEXT NOT NULL,
            city TEXT NOT NULL
        );"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()

    def get_products(self):
        sql = """select * from products"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql)

        data = cursor.fetchall()
        result = []
        for item in data:
            product = Product(**item)
            result.append(product)
        return result

    def get_products_by_id(self, id):
        sql = """select * from products where id=:id"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"id": id})

        data = cursor.fetchone()
        product = Product(**data)
        return product

    def save(self, product):
        sql = """insert into products (id,name,description,price,image,mail,phone,city) values (
            :id, :name, :description, :price, :image, :mail, :phone, :city
        ) """
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, product.to_dict())

        conn.commit()
    def get_products_by_city(self, city):
        sql = """select * from products where city =:city"""
        conn = self.create_conn()
        cursor = conn.cursor()
        cursor.execute(sql, {"city": city})

        data = cursor.fetchall()
        result = []
        for item in data:
            product = Product(**item)
            result.append(product)
        return result
    