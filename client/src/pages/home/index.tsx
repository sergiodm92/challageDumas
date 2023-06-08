import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100vw",
    height: "80vh",
    backgroundColor: "#000",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "60%",
    height: "60%",
    objectFit: "cover",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src="https://free4kwallpapers.com/uploads/originals/2015/09/25/cat-black-and-white.jpg"
        alt="Imagen"
      />
    </div>
  );
};

export default Home;

