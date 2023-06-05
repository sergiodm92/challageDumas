import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CatList.module.css";
import CatCard from "../../../components/CatCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCat, getCats } from "../../../store/actions";
import { Redux_State } from "../../../models/global_types";

const CatList: React.FC = () => {
  const dispatch: any = useDispatch();
  const Navigate = useNavigate();
  const cats = useSelector((state: Redux_State) => state.cats);

  useEffect(() => {
    dispatch(getCats());
  }, []);

  const handleDelete = async (catId: string) => {
    await dispatch(deleteCat(catId));
    dispatch(getCats());
  };
  const handleClick = () => {
    Navigate("/cats/create");
  };
  return (
    <div className={styles.container}>
      <div className={styles.divCreate}>
        <Button
          onClick={handleClick}
          variant="contained"
          endIcon={<AddCircleIcon />}
        >
          Crear
        </Button>
      </div>

      <div className={styles.catList}>
        {cats.length
          ? cats.map((cat) => {
              return (
                <div className={styles.divCard} key={cat.id}>
                  <CatCard
                    name={cat.name}
                    image={cat.photo_url}
                    breed={cat.breed}
                    age={cat.age}
                    id={cat.id}
                    handleDelete={handleDelete}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default CatList;
