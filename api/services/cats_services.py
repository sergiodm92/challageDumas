from db import get_database
from models import CatCreate

db = get_database()


async def get_all_cats():
    try:
        cats = []
        cats_collection = db.collection('cats').get()
        for doc in cats_collection:
            cat = doc.to_dict()
            cat['id'] = doc.id
            cats.append(cat)
        return cats
    except Exception as e:
        raise Exception('Ocurrió un error inesperado: {}'.format(e))


async def create_cat(cat_data: CatCreate):
    try:
        doc_ref_cat = db.collection('cats').document()
        doc_ref_cat.set(cat_data.dict())

        doc_snapshot_cat = doc_ref_cat.get()
        if doc_snapshot_cat.exists:
            return True
        else:
            raise Exception('No se pudo crear el gato correctamente')

    except Exception as e:
        raise Exception('Ocurrió un error inesperado: {}'.format(e))


async def get_cat_by_id(cat_id: str):
    doc_ref_cat = db.collection('cats').document(cat_id)
    doc_snapshot_cat = doc_ref_cat.get()

    if doc_snapshot_cat.exists:
        return doc_snapshot_cat.to_dict()
    else:
        raise Exception('Gato no encontrado')


async def update_cat(cat_id: str, cat_data: CatCreate):
    doc_ref_cat = db.collection('cats').document(cat_id)
    doc_ref_cat.update(cat_data.dict())

    doc_snapshot_cat = doc_ref_cat.get()
    if doc_snapshot_cat.exists:
        return doc_snapshot_cat.to_dict()
    else:
        raise Exception('Gato no encontrado')


async def delete_cat(cat_id: str):
    doc_ref_cat = db.collection('cats').document(cat_id)
    doc_snapshot_cat = doc_ref_cat.get()

    if doc_snapshot_cat.exists:
        doc_ref_cat.delete()
    else:
        raise Exception('Gato no encontrado')
