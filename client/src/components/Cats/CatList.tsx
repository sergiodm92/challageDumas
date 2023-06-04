import React, { useEffect, useState } from "react";
import { getCats, deleteCat } from "../../services/catsService";
import { Cat } from "../../models/Cat";
import { Link } from "react-router-dom";
import styles from "./CatList.module.css";
import Card from "./card";

const CatList: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    get_Cats();
  }, []);

  const get_Cats = async () => {
    const data = await getCats();
    setCats(data);
  };

  const handleDelete = async (catId: string) => {
    await deleteCat(catId);
    getCats();
  };

  return (
    <div>
      <h2>Lista de gatos</h2>
      <Link to="/cats/create"><button>Crear gato</button></Link>
      <div className={styles.catList}>
        {cats.map((cat) => (
          <div className={styles.divCard} key={cat.id}>
            <div className={styles.catCard}>
              <Card
                image={cat.photo_url}
                name={cat.name}
                breed={cat.breed}
                age={cat.age}
                id={cat.id}
              />
            </div>
            <div className={styles.divButtons}>
              <Link to={`/cats/edit/${cat.id}`}><button>Editar</button></Link>
              <button onClick={() => handleDelete(cat.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatList;
