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


