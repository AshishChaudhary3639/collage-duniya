import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Header from "../components/Header";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Header />} />
    </Routes>
  );
};

export default AllRoutes;
