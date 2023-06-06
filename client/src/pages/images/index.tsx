import React, { useEffect } from "react";
import CardImage from "../../components/ImageCard/cardImage";
import CachedIcon from "@mui/icons-material/Cached";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRandomImages } from "../../store/actions";
import { Redux_State } from "../../models/global_types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const imagesList: React.FC = () => {
  const dispatch: any = useDispatch();

  const images = useSelector((state: Redux_State) => state.images);

  useEffect(() => {
    dispatch(getRandomImages());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.divReload}>
        <Button
          onClick={() => dispatch(getRandomImages())}
          variant="contained"
          endIcon={<CachedIcon />}
        >
          Recargar
        </Button>
      </div>
      {images.length ? (
        <div className={styles.catList}>
          {images.map((image) => (
            <div key={image.id} className={styles.divCard}>
              <div className={styles.catCard}>
                <CardImage image={image} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Box sx={{ display: "flex", justifyContent:"center", height:"50vh", alignItems:"center" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default imagesList;
