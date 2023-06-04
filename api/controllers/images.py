from fastapi import APIRouter
from services.images_services import get_random_public_images, mark_image_as_favorite, get_favorite_images
from middlewares.response import custom_response_success, custom_response_error

router = APIRouter()


@router.get("/")
def get_random_public_images_route():
    try:
        images = get_random_public_images(10)
        return custom_response_success({images})
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.post("/favorites")
def mark_image_as_favorite_route(image_id: str):
    try:
        mark_image_as_favorite(image_id)
        return custom_response_success({"msg": "Imagen marcada como favorita"})
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.get("/favorites")
def get_favorite_images_route():
    try:
        images = get_favorite_images()
        return custom_response_success({images})
    except Exception as e:
        return custom_response_error(str(e), 500)
