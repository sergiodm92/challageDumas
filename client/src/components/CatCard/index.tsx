import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CatToCard } from "../../models/Cat";

export default function CatCard({
  image,
  name,
  breed,
  age,
  id,
  handleDelete,
}: CatToCard) {
  const handleDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <Card sx={{ width: 300 }}>
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
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
