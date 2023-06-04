import React, { useEffect, useState } from "react";
import { getRandomImages } from "../../services/imagesServices";
import { Image } from "../../models/image";
import CardImage from "../Cats/cardImage";
import styles from "./styles.module.css"

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
      <div className={styles.catList}>
        {images.map((image) => (
          <div key={image.id} className={styles.divCard}>
            <div className={styles.catCard}>
            <CardImage image={image.url} />

            </div>
            <button onClick={() => handleFavorite(image.id)}>
              Agregar a Favorito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default imagesList;
