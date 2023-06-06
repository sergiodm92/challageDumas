from fastapi import APIRouter
from services.images_services import get_random_public_images, mark_image_as_favorite, get_favorites, remove_image_from_favorites
from middlewares.response import custom_response_success, custom_response_error
from models import ImageID

router = APIRouter()


@router.get("/")
def get_random_public_images_route():
    try:
        images = get_random_public_images(10)
        return custom_response_success(images)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.post("/favourites")
def mark_image_as_favorite_route(data: ImageID):
    try:
        image_id = data.image_id
        response = mark_image_as_favorite(image_id)
        if response:
            return custom_response_success({"msg": "Imagen marcada como favorita"})
        else:
            return custom_response_error("No se pudo agregar a favoritos", 400)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.get("/favourites")
def favourite_image():
    try:
        response = get_favorites()
        return custom_response_success(response)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.post("/remove_favourite")
def remove_favourite_image(data: ImageID):
    try:
        image_id = data.image_id
        response = remove_image_from_favorites(image_id)
        if response:
            return custom_response_success({"msg": "Imagen eliminada de favoritos"})
        else:
            return custom_response_error("No se pudo quitar de favoritos", 400)
    except Exception as e:
        return custom_response_error(str(e), 500)


