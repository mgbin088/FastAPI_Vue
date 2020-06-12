"""
 mongodb 连接
 暂时使用简单的直连
 计划后续增加数据模型，防止数据混乱
"""

from pymongo import MongoClient
from apps.config import Config


class MyMongo(object):
    def __init__(self, db_name: str, host: str = "127.0.0.1", port: int = 27017):
        self._myClient = MongoClient(host=host, port=port)
        self._myDB = self._myClient[db_name]

    def get_db(self):
        return self._myDB


myMongo = MyMongo(db_name=Config.db_name, host=Config.db_host, port=Config.db_port)


class Collection(object):
    list_collection = [
        "visits"
    ]

    def __init__(self, table_name: str):
        if table_name in self.list_collection:
            self.collectionObj = myMongo.get_db()[table_name]

    def add_one(self, data: dict):
        return self.collectionObj.insert_one(data)

    def get_one(self, data: dict = None):
        return self.collectionObj.find_one(data)

    def get_more(self, data: dict = None):
        return self.collectionObj.find(data)

    def update_one_data(self, fil: dict, data: dict):
        result = self.collectionObj.update_one(fil, data)
        return result

    def update_many_data(self, fil: dict, data: dict):
        result = self.collectionObj.update_many(fil, data)
        return result

    def delete_one(self, fil: dict):
        result = self.collectionObj.delete_one(fil)
        return result

    def delete_many(self, fil: dict):
        result = self.collectionObj.delete_many(fil)
        return result


__all__ = [
    "Collection"
]


