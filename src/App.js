import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';




function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>} />
        </Route>

        <Route path='/detail/:id' element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
