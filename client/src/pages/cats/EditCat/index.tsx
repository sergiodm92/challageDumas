import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  getFavourites, updateCat } from "../../../store/actions";
import { Cat } from "../../../models/Cat";
import styles from "./EditCat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Redux_State } from "../../../models/global_types";
import {
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import ImageSelector from "../../../components/ModalImage";

const EditCat: React.FC = () => {

  const dispatch: any = useDispatch();
  const favourites = useSelector((state: Redux_State) => state.favoutites);
  const cat = useSelector((state: Redux_State) => state.editCat);


  const navigate = useNavigate();
  const [name, setName] = useState(cat.name);
  const [breed, setBreed] = useState(cat.breed);
  const [age, setAge] = useState(cat.age);
  const [photoUrl, setPhotoUrl] = useState(cat.photo_url);


  const handleGuardar = async () => {
    const update_Cat: Cat = {
      id: cat.id,
      name: name,
      breed: breed,
      age: age,
      photo_url: photoUrl,
    };
    dispatch(updateCat(update_Cat));
    navigate("/cats");
  };

  useEffect(() => {
    dispatch(getFavourites());
  }, []);

  const handleCancelar = () => {
    navigate("/cats");
  };

  return (
    <div className={styles.container}>
      <h1>Editar Gato</h1>
      <div className={styles.divForm}>
        <FormControl className={styles.form}>
          <div className={styles.formGroup}>
            <TextField
              type="text"
              id="name"
              value={name}
              label="Nombre"
              variant="filled"
              onChange={(e) => setName(e.target.value)}
              inputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>
          <div className={styles.formGroup}>
            <TextField
              type="text"
              id="breed"
              label="Raza"
              variant="filled"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              inputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>
          <div className={styles.formGroup}>
            <TextField
              type="number"
              id="age"
              label="Edad"
              variant="filled"
              value={age ? age : ""}
              onChange={(e) => setAge(parseInt(e.target.value))}
              inputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>
          <div className={styles.formGroup}>
            <div className={styles.selectImage}>
            <ImageSelector
            data={favourites}
            setPhotoUrl={setPhotoUrl}
            />
            </div>
            {photoUrl ? (
              <img src={`${photoUrl}`} className={styles.photo} />
            ) : null}
          </div>
        </FormControl>
        <div className={styles.buttonGroup}>
          <Button variant="contained" onClick={handleGuardar}>
            Guardar
          </Button>
          <Button variant="contained" onClick={handleCancelar}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditCat;
