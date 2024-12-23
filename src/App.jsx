import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginationPage from "./pages/PaginationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
