import React from 'react';
import styles from './CardImage.module.css';

interface CardProps {
  image: string;
  name: string;
  breed: string;
  age: number;
  id: string;
}

const CardImage: React.FC<CardProps> = ({ image, name, breed, age, id }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardDetails}>
      </div>
    </div>
  );
};

export default CardImage;
