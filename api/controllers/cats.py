from fastapi import APIRouter
from middlewares.response import custom_response_success, custom_response_error
from services.cats_services import (
    get_all_cats, get_cat_by_id, create_cat, update_cat, delete_cat)
from models import CatCreate, Cat

router = APIRouter()


@router.get("/")
async def get_cats():
    try:
        cats = await get_all_cats()
        return custom_response_success(cats)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.get("/{cat_id}")
async def get_cat(cat_id: str):
    try:
        cat = await get_cat_by_id(cat_id)
        if cat:
            return custom_response_success(cat)
        else:
            return custom_response_error("Gato no encontrado", 404)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.post("/")
async def create_new_cat(cat_data: CatCreate):
    try:
        cat = await create_cat(cat_data)
        if cat:
            return custom_response_success(cat)
        else:
            return custom_response_error("No se pudo crear el gato", 500)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.put("/{cat_id}")
async def update_cat_by_id(cat_id: str, cat_data: CatCreate):
    try:
        updated_cat = await update_cat(cat_id, cat_data)
        if updated_cat:
            return custom_response_success(updated_cat)
        else:
            return custom_response_error("Gato no encontrado", 404)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.delete("/{cat_id}")
async def delete_cat_by_id(cat_id: str):
    try:
        deleted = await delete_cat(cat_id)
        if deleted:
            return custom_response_success({"msg": "Gato eliminado exitosamente"})
        else:
            return custom_response_error("Gato no encontrado", 404)
    except Exception as e:
        return custom_response_error(str(e), 500)
