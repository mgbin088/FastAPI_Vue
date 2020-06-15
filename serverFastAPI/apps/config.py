import configparser
import os

apps_dir = os.path.dirname(os.path.abspath(__file__))


class DefaultConfig(object):

    config_dir = os.path.join(os.path.dirname(apps_dir), "config")

    def __init__(self):
        self.db_host = "127.0.0.1"
        self.db_port = 27017
        self.db_name = "fastdb"
        self._configObj = configparser.ConfigParser()
        self._configObj.read(self.get_config_file()[0])
        self.add_item()

    def get_config_file(self):
        configPath = os.path.join(self.config_dir, "config.ini")
        return [configPath]

    def add_item(self):
        for section in self._configObj.sections():
            for key in self._configObj.options(section):
                self.__dict__["_".join([section, key])] = self._configObj.get(section, key)


Config = DefaultConfig()

__all__ = [
    "Config"
]
