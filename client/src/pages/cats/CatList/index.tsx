import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CatList.module.css";
import CatCard from "../../../components/CatCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCat, getCats } from "../../../store/actions";
import { Redux_State } from "../../../models/global_types";

const CatList: React.FC = () => {
  const dispatch: any = useDispatch();

  const cats = useSelector((state: Redux_State) => state.cats);

  useEffect(() => {
    dispatch(getCats());
  }, [cats]);

  const handleDelete = async (catId: string) => {
    dispatch(deleteCat(catId));
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.divCreate}>
        <Button
          component={Link}
          to="/cats/create"
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
