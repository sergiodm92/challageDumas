import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CatList from "./components/Cats/CatList";
import CatForm from "./components/Cats/CatForm";
import CatEdit from "./components/Cats/CatEdit";
import ImagenesList from "./components/Images/ImagesList";

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/cats" element={<CatList />} />
        <Route path="/cats/create" element={<CatForm />} />
        <Route path="/cats/edit/:id" element={<CatEdit />} />
        <Route path="/images" element={<ImagenesList />} />
      </Routes>
    </Router>
  );
};

export default App;
