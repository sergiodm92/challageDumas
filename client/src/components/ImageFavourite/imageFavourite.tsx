import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Favorite } from "../../models/image";

export default function ImageFavourite(data: { image: Favorite }) {
  const image = data.image.image;

  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ width: 300, height: 200 }}
        image={image.url}
        alt="catImage"
      />
    </Card>
  );
}
