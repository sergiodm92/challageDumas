import React, { useEffect, useState } from "react";
import { getRandomImages } from "../../services/imagesServices";
import { Image } from "../../models/image";

const imagesList: React.FC = () => {
  const [images, setimages] = useState<Image[]>([]);

  useEffect(() => {
    fetchimages();
  }, []);

  const fetchimages = async () => {
    const data = await getRandomImages();
    setimages(data);
  };

  const handleFavorite = (imageId: string) => {
    const updatedimages = images.map((image) =>
      image.id === imageId ? { ...image, favorite: true } : image
    );
    setimages(updatedimages);
  };

  return (
    <div>
      <h2>Imágenes</h2>
      <button onClick={fetchimages}>Cargar imágenes</button>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={`image ${image.id}`} />
            <button onClick={() => handleFavorite(image.id)}>
              Agregar a Favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default imagesList;
