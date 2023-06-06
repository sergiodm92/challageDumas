from fastapi import APIRouter
from middlewares.response import custom_response_success, custom_response_error
from services.cats_services import (
    get_all_cats, get_cat_by_id, create_cat, update_cat, delete_cat)
from models import CatCreate, Cat

router = APIRouter()


@router.get("/")
async def get_all_cat_breeds_route():
    try:
        cats = await get_all_cats()
        return custom_response_success(cats)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.get("/{cat_id}")
async def get_cat(cat_id: str):
    try:
        cat = await get_cat_by_id(cat_id)
        return custom_response_success(cat)
    except Exception as e:
        return custom_response_error(str(e), 404)


@router.post("/")
async def create_new_cat(cat_data: CatCreate):
    try:
        response = await create_cat(cat_data)
        if(response):
            return custom_response_success(cat_data)
        else: return custom_response_error(str(e), 500)
    except Exception as e:
        return custom_response_error(str(e), 500)


@router.put("/{cat_id}")
async def update_cat_by_id(data: CatCreate, cat_id: str):
    try:
        cat = await update_cat(data, cat_id)
        return custom_response_success(cat)
    except Exception as e:
        return custom_response_error(str(e), 404)


@router.delete("/{cat_id}")
async def delete_cat_by_id(cat_id: str):
    try:
        response = await delete_cat(cat_id)
        if(response):
            return custom_response_success({"msg": "Gato eliminado exitosamente"})
    except Exception as e:
        return custom_response_error(str(e), 404)

