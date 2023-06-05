import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCat, getFavourites } from "../../../store/actions";
import { NewCat } from "../../../models/Cat";
import styles from "./CreateCat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Redux_State } from "../../../models/global_types";

const CatForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");

  const dispatch: any = useDispatch();

  const message = useSelector((state: Redux_State) => state.message);
  const favourites = useSelector((state: Redux_State) => state.favoutites);

  const handleGuardar = async () => {
    const newCat: NewCat = {
      name: name,
      breed: breed,
      age: age,
      photo_url: photoUrl,
    };
    dispatch(createCat(newCat));
  };

  useEffect(() => {
    if (message) {
      navigate("/cats");
    }
  }, [message]);
  useEffect(() => {
    dispatch(getFavourites());
  }, []);

  const handleCancelar = () => {
    navigate("/cats");
  };
  console.log(favourites);
  const handleChange = (e) => {
    e.preventDefault();
    setPhotoUrl(e.target.value);
  };
console.log(photoUrl)
  return (
    <div className={styles.container}>
      <h2>Crear Cat</h2>
      <form className={styles.form}>
        <fieldset>
          <legend>Información del gato</legend>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="breed">Raza:</label>
            <input
              type="text"
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="age">Edad:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="photoUrl">Foto:</label>
            <select id={"selectImage"} onChange={handleChange}>
              <option defaultValue={"-"}></option>
              {favourites.length
                ? favourites.map((image) => {
                    return (
                      <option key={image.id} value={image.image.url}>
                        {image.image.url}
                      </option>
                    );
                  })
                : null}
            </select>
            {photoUrl?
            <img src={`${photoUrl}`} className={styles.photo}/>
            :null
}
          </div>
        </fieldset>
      </form>
      <div className={styles.buttonGroup}>
        <button onClick={handleGuardar}>Guardar</button>
        <button onClick={handleCancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default CatForm;
