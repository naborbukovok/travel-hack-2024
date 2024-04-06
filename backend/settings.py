from pydantic_settings import BaseSettings


class AppSettings(BaseSettings):
    name: str = "db-api"
    env: str = "dev"
    version: str = "1.0.0"
    title: str = "Moscow TravelHack BookingTech API dorateam"

    class Config:
        env_prefix = "app_"


class ServerSettings(BaseSettings):
    app: str = "backend.app:create_app"
    factory: bool = True
    workers: int = 1
    reload: bool = False
    loop: str = "auto"
    host: str = "0.0.0.0"
    port: int = 3000

    class Config:
        env_prefix = "api_"
