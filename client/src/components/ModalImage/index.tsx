import { useState } from "react";
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  Theme,
  createStyles,
  Checkbox,
  Typography,
} from "@mui/material";
import {makeStyles} from "@mui/styles"
import { Favorite } from "../../models/image";
import ImageFavourite from "../ImageFavourite/imageFavourite";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalContent: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: 400,
      height: 400,
      overflow: "auto",
      position: "relative",
      "&::-webkit-scrollbar": {
        width: "0.4em",
        height: "0.4em",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "0.2em",
      },
      "&:hover::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0.2em",
      },
    },
    image: {
        width: 200,
        height: 200,
        objectFit: "contain",
      },
  })
);

const ImageSelector = ({data, setPhotoUrl}: { data: Favorite[], setPhotoUrl: any }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const favourites = data;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    
  };

  const handleSaveImage = () => {
    // Aquí puedes realizar cualquier acción que desees con la imagen seleccionada
    console.log("Imagen seleccionada:", selectedImage);
    setPhotoUrl(selectedImage);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained"  onClick={handleOpen}>
       <AddPhotoAlternateIcon/>
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalContent}>
            <Grid container spacing={2}>
              {favourites.length ? (
                favourites.map((image) => (
                  <Grid item xs={6} key={image.id}>
                    <Checkbox
                      checked={selectedImage === image.image.url}
                      onChange={() => handleImageClick(image.image.url)}
                    />
                    <ImageFavourite image={image}/>
                  </Grid>
                ))
              ) : (
                <Typography variant="body1">
                  No hay imágenes favoritas.
                </Typography>
              )}
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{margin: "10px"}}
              onClick={handleSaveImage}
            >
              OK
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageSelector;
