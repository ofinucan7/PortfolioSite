import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MoviePlus from './pages/projects/Movie-Plus/MoviePlus';
import Stars from './background/Stars';
import Portfolio from './pages/projects/Portfolio-Proj/Portfolio';
import MedDay from './pages/projects/MedDay/MedDay';

function App() {

  return (
    <div className="min-h-screen bg-black">
      <Stars />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/movie-plus" element={<MoviePlus />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/medday" element={<MedDay />} />
      </Routes>
    </div>
  );
}

export default App;