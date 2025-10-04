import React from "react";
import { Outlet } from "react-router-dom";
import Board from "./Board";
import Background from "./Background";

const AdminLayout = () => {
  return (
   
    <div>
    <Board>
     <Outlet /> {/* Page content goes inside Board */}
   </Board>
  </div>
    
  );
};

export default AdminLayout;
