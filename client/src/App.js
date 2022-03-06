import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";


// importing Pages
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>

  );
}

export default App;
