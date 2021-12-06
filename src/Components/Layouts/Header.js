import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <>
      <div className="header__left">
        <img src="" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </>
  );
};

export default Header;
