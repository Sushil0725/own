import React from "react";
import { Outlet } from "react-router-dom";
import Board from "./Board";
import Navbar from "./Navbar";

const UserLayout = () => {
  return (
    
      <div>
         <Board>
          <Navbar/>
          <Outlet /> {/* Page content goes inside Board */}
        </Board>
      </div>
    
  );
};

export default UserLayout;
