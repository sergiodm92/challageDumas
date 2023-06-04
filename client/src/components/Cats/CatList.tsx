import React, { useEffect, useState } from 'react';

import { getCats, deleteCat } from '../../services/catsService';
import { Cat } from '../../models/Cat';
import { Link } from 'react-router-dom';


const catList: React.FC = () => {
  const [cats, setcats] = useState<Cat[]>([]);

  useEffect(() => {
    get_cats();
  }, []);

  const get_cats = async () => {
    const data = await getCats();
    setcats(data);
  };

  const handleDelete = async (catId: string) => {
    console.log("eliminar ")
    await deleteCat(catId);
    get_cats();
  };
  return (
    <div>
      <h2>Lista de cats</h2>
      <Link to="/cats/create">Crear cat</Link>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <img src={cat.photo_url} alt={cat.name} />
            <div>
              <h3>{cat.name}</h3>
              <p>Raza: {cat.breed}</p>
              <p>age: {cat.age}</p>
              <p>id: {cat.id}</p>
            </div>
            <div>
              <Link to={`/cats/edit/${cat.id}`}>Editar</Link>
              <button onClick={() => handleDelete(cat.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default catList;
