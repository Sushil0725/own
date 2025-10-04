import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/users/Home";
import UserLayout from "./components/UserLayout";
import AdminLayout from "./components/AdminLayout";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* User section */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Admin section */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;


