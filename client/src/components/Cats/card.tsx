import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  image: string;
  name: string;
  breed: string;
  age: number;
  id: string;
}

const Card: React.FC<CardProps> = ({ image, name, breed, age, id }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardDetails}>
        <h3>{name}</h3>
        <p>Raza: {breed}</p>
        <p>Edad: {age}</p>
        <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default Card;
