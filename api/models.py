from pydantic import BaseModel

class CatCreate(BaseModel):
    name: str
    breed: str
    age: int
    photo_url: str