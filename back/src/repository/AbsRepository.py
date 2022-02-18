from abc import ABC, ABCMeta, abstractmethod

class AbsRepository(ABC):

    def get_products(self):
        pass
    def get_products_by_id(self, id):
        pass
    def get_products_by_city(self, city):
        pass
    def save(self, product):
        pass