import requests

favorite_images = []


def get_random_public_images(limit: int):
    url = "https://api.thecatapi.com/v1/images/search"
    # Categoría de imágenes públicas
    params = {"limit": limit, "category_ids": "1"}
    response = requests.get(url, params=params)
    response.raise_for_status()  # Manejo de errores de la solicitud HTTP

    data = response.json()
    if isinstance(data, list) and len(data) > 0:
        image_urls = [image.get("url") for image in data]
        return image_urls

    raise Exception("No se pudieron obtener las imágenes públicas aleatorias")


def mark_image_as_favorite(image_id: str):
    favorite_images.append(image_id)


def get_favorite_images():
    return favorite_images
