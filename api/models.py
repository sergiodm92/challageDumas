from pydantic import BaseModel

class CatCreate(BaseModel):
    name: str
    breed: str
    age: int
    photo_url: str

class ImageID(BaseModel):
    image_id: str

class FavouriteId(BaseModel):
    favourite_id: int