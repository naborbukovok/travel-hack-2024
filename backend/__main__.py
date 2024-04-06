import uvicorn
from backend.settings import ServerSettings


def main():
    uvicorn.run(**ServerSettings().model_dump())


if __name__ == "__main__":
    main()
