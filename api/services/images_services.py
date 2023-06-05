import requests

API_KEY = "live_MPX7f0hfDqllkHQ5I1iTPRMnXunzMfvoqX7vgkmEr3Upc5IbLVcQDsjylNHKj85Z"
BASE_URL = "https://api.thecatapi.com/v1"
FAVOURITES_URL = f"{BASE_URL}/favourites"
IMAGES_URL = f"{BASE_URL}/images"


def get_random_public_images(limit: int):
    url = f"{IMAGES_URL}/search"
    params = {"limit": limit, "category_ids": "1"}

    try:
        response = requests.get(url, params=params)
        response.raise_for_status()

        data = response.json()
        favorites = get_favorites()
        existing_favorites = [favorite.get("image_id") for favorite in favorites]

        for image in data:
            image_id = image.get("id")
            image["favourite"] = image_id in existing_favorites

        return data

    except requests.exceptions.RequestException as e:
        raise Exception(f"Error en la solicitud HTTP: {str(e)}")



def mark_image_as_favorite(image_id: str):
    url = FAVOURITES_URL
    headers = {"x-api-key": API_KEY}
    payload = {"image_id": image_id}

    try:
        favorites = get_favorites()
        existing_favorites = [favorite.get("image_id") for favorite in favorites]
        if image_id in existing_favorites:
            return False

        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()

        json_response = response.json()
        if json_response.get("message") == "SUCCESS":
            return True
        else:
            return False
    except requests.exceptions.RequestException as e:
        raise Exception(f"Error en la solicitud HTTP: {str(e)}")



def get_favorites():
    url = FAVOURITES_URL
    headers = {"x-api-key": API_KEY}

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()

        json_response = response.json()

        return json_response
    except requests.exceptions.RequestException as e:
        raise Exception(f"Error en la solicitud HTTP: {str(e)}")


def remove_image_from_favorites(image_id: int):
    url = FAVOURITES_URL
    headers = {"x-api-key": API_KEY}

    try:
        favourites = get_favorites()
        favorite_id = None

        # Buscar el ID del favorito correspondiente al image_id
        for favourite in favourites:
            if favourite.get("image_id") == image_id:
                favorite_id = favourite.get("id")
                break

        if not favorite_id:
            raise Exception("La imagen no se encuentra en favoritos.")

        delete_url = f"{url}/{favorite_id}"
        response = requests.delete(delete_url, headers=headers)
        response.raise_for_status()

        json_response = response.json()
        if json_response.get("message") == "SUCCESS":
            return True
        else:
            return False
    except requests.exceptions.RequestException as e:
        raise Exception(f"Error en la solicitud HTTP: {str(e)}")

