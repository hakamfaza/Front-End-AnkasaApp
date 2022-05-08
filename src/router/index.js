import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import Landing from "../pages/Landing";

import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import MyBooking from "../pages/MyBooking";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Reset from "../pages/Reset";

// function PrivateRoute({ children }) {
//   const token = localStorage.getItem('token');

//   if (token) {
//     return children;
//   }
//   return <Navigate to="/auth" />;
// }

// function PublicRoute({ children }) {
//   const token = localStorage.getItem('token');

//   if (!token) {
//     return children;
//   }
//   return <Navigate to="/" />;
// }

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
        </Route>
        <Route path="/profile">
          <Route index element={
            <PrivateRoute>
              <Profile />
            </ PrivateRoute>
          } />
        </Route>
        <Route path="/mybooking">
          <Route index element={<MyBooking />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/reset/:token" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
