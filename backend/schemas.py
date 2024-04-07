from pydantic import BaseModel


class Tour(BaseModel):
    title: str
