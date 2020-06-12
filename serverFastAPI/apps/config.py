
class DefaultConfig(object):

    def __init__(self):
        self.db_host = "127.0.0.1"
        self.db_port = 27017
        self.db_name = "fastdb"


Config = DefaultConfig()

__all__ = [
    "Config"
]
