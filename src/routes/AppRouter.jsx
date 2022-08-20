import React from "react";

import { Routes, Route } from "react-router-dom";

import { Layout } from "../layout/Layout";
import { NotFound } from "../pages/NotFound";

import { Categories } from "../pages/Categories";
import { Bike } from "../pages/Bike";
import { Rental } from "../pages/Rental";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path=":categoryId" element={<Bike />} />
          <Route path="rental/:bikeId" element={<Rental />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
