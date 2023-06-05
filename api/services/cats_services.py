import requests
from db import get_database
from models import Cat, CatCreate

db = get_database()


# Traer todos los gatos
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
        print(e)
        return {'error': 'Ocurrió un error inesperado: {}'.format(e)}


async def create_cat(cat_data):
    try:
        # Guardar el nuevo gato en la base de datos
        doc_ref_cat = db.collection('cats').document()
        doc_ref_cat.set(cat_data.dict())

        # Verificar si el gato se guardó correctamente
        doc_snapshot_cat = doc_ref_cat.get()
        if doc_snapshot_cat.exists:
            return True
        else:
            return False

    except Exception as e:
        print(e)
        return {'error': 'Ocurrió un error inesperado: {}'.format(e)}


async def get_cat_by_id(cat_id: int):
    doc_ref_cat = db.collection('cats').document(cat_id)
    doc_snapshot_cat = doc_ref_cat.get()

    if doc_snapshot_cat.exists:
        return doc_snapshot_cat.to_dict()
    else:
        raise Exception("Gato no encontrado")


async def update_cat(data: Cat):
    doc_ref_cat = db.collection('cats').document(data.id)
    doc_ref_cat.update({
        'name': data.name,
        'breed': data.breed,
        'photo_url': data.photo_url,
        'age': data.age
    })

    doc_snapshot_cat = doc_ref_cat.get()
    if doc_snapshot_cat.exists:
        return doc_snapshot_cat.to_dict()
    else:
        raise Exception("Gato no encontrado")



async def delete_cat(cat_id):
    doc_ref_cat = db.collection('cats').document(cat_id)
    doc_snapshot_cat = doc_ref_cat.get()

    if doc_snapshot_cat.exists:
        doc_ref_cat.delete()
    else:
        raise Exception("Gato no encontrado")
