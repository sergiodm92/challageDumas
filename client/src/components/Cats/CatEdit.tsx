// components/Cats/CatEdit.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCatById, updateCat } from "../../services/catsService";
import { Cat } from "../../models/Cat";

const CatEdit: React.FC = () => {
  const Navigate = useNavigate();
  const { id } = useParams<Record<string, string | undefined>>();
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    fetchCat();
  }, [id]);

  const fetchCat = async () => {
    if (id) {
      const data = await getCatById(parseInt(id));
      setCat(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cat) {
      await updateCat(cat.id, cat);
      Navigate("/cats");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cat) {
      setCat({ ...cat, [e.target.name]: e.target.value });
    }
  };

  if (!cat) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Editar Cat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={cat.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Raza:
          <input
            type="text"
            name="raza"
            value={cat.breed}
            onChange={handleChange}
          />
        </label>
        <label>
          Edad:
          <input
            type="number"
            name="edad"
            value={cat.age}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default CatEdit;
