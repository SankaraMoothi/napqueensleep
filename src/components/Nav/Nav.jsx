import React from "react";
import "./Nav.scss";
import { Avatar } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
const Nav = () => {
  return (
    <div className="nav">
      <SortIcon className="sort" />
      <Avatar className="avator" src="" />
    </div>
  );
};

export default Nav;
