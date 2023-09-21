import './App.css';
import RestaurantRating from './components/RestaurantRating';
import React from "react";
import RestaurantCuisine from './components/RestaurantCuisine';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Rating" element={ <RestaurantRating/> } />
        <Route path="Cuisine" element={ <RestaurantCuisine/> } />
      </Routes>
    </div>
  )
}

export default App;
