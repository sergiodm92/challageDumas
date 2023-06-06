import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Image } from "../../models/image";
import { useDispatch } from "react-redux";
import { addFavourites, removeFavourites } from "../../store/actions";

export default function CardImage(data: { image: Image }) {
  const image = data.image;

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dispatch: any = useDispatch();

  const [isFavourite, setIsFavourite] = useState(image.favourite);

  const handleFavoriteClick = () => {
    if (!isFavourite) {
      dispatch(addFavourites(image.id));
    }
    else {
      dispatch(removeFavourites(image.id));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        sx={ width<1400? { width: 200, height: 150 }:width<1600?{ width: 250, height: 180 } :{ width: 300, height: 225 }}
        image={image.url}
        alt="catImage"
      />
      <CardActions sx={{ justifyContent: "flex-end", height: "20px" }}>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon
            color={isFavourite? "primary" : "disabled"}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
