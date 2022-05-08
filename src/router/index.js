import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import SearchFlight from "../pages/SearchFlight";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate to="/auth" />;
}

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return children;
  }
  return <Navigate to="/" />;
}

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <SearchFlight />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
