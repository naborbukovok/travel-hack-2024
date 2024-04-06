from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.settings import AppSettings
from backend.routers import routers


# Функция создания приложения FastAPI
def create_app() -> "FastAPI":
    app_settings = AppSettings()
    app = FastAPI(**app_settings.model_dump())

    app.add_middleware(
        CORSMiddleware,  # type: ignore
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    for router in routers:
        app.include_router(router)

    return app
