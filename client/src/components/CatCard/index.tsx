import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { CatToCard } from "../../models/Cat";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CatCard({
  image,
  name,
  breed,
  age,
  id,
  handleDelete,
}: CatToCard) {
  const Navigate = useNavigate();
  const handleDeleteClick = () => {
    handleDelete(id);
  };
  const handleEdit = () => {
    Navigate(`/cats/edit/${id}`);
  };

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

  return (
    <Card
    sx={ width<1400? { width: 200, height: 340 }:width<1600?{ width: 250, height: 340 } :{ width: 300, height: 340 }}
    >
      <CardMedia component="img" height="194" image={image} alt="image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Nombre:</strong> {name}
          <br />
          <strong>Raza:</strong> {breed}
          <br />
          <strong>Edad:</strong> {age}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
