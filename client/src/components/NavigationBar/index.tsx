import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

export default function NavigationBar() {
  const location = useLocation();

  return (
    <BottomNavigation sx={{ width: "100%", backgroundColor: "black"}} value={location.pathname}>
      <BottomNavigationAction
        label="Inicio"
        value="/"
        icon={<HomeIcon color="primary"/>}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Gatos"
        value="/cats"
        icon={<PetsIcon color="primary"/>}
        component={Link}
        to="/cats"
      />
      <BottomNavigationAction
        label="Imagenes"
        value="/images"
        icon={<PhotoLibraryIcon color="primary"/>}
        component={Link}
        to="/images"
      />
    </BottomNavigation>
  );
}
