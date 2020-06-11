import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import importlib


def include_router(app: FastAPI) -> None:
    router_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "routers")
    for module_name in os.listdir(router_path):
        module_path = os.path.join(router_path, module_name)
        if os.path.isdir(module_path) and module_name not in ["__pycache__"]:
            __module = importlib.import_module(f"apps.routers.{module_name}.api")
            app.include_router(__module.router, prefix=f"/api/{module_name}")
        elif os.path.isfile(module_path) and module_name not in ["__init__.py"]:
            module_name = os.path.splitext(module_name)[0]
            __module = importlib.import_module(f"apps.routers.{module_name}")
            app.include_router(__module.router, prefix=f"/api/{module_name}")
        else:
            pass


def cors(app: FastAPI) -> None:
    origins = [
        "http://127.0.0.1:8887",
        "https://127.0.0.1:8887",
        "http://www.quiet888.com",
        "https://www.quiet888.com"
    ]

    app.add_middleware(CORSMiddleware,
                       allow_origins=origins,
                       allow_credentials=True,
                       allow_methods=["*"],
                       allow_headers=["*"],)


def create_app() -> FastAPI:
    app = FastAPI()
    cors(app)
    include_router(app)

    return app
