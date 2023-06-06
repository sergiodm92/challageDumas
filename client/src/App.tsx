import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import CatList from './pages/cats/CatList';
import CatForm from './pages/cats/CreateCat';
import ImagenesList from './pages/images/index';
import EditCat from './pages/cats/EditCat';
import Home from './pages/home';

const App: React.FC = () => {
  return (
      <AppContent />
  );
};

const AppContent: React.FC = () => {

  return (
    <div className="bodyPage">
        <div className='NavigationBar'>
        <NavigationBar
        />
        </div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/cats" element={<CatList />} />
          <Route path="/cats/create" element={<CatForm />} />
          <Route path="/cats/edit/:cat_id" element={<EditCat />} />
          <Route path="/images" element={<ImagenesList />} />
        </Routes>
    </div>
  );
};

export default App;
