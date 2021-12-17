import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SuperVisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import linkedinLogo from "../../assets/linkedin-logo.svg";
import classes from "./Header.module.css";
import HeaderOption from "./HeaderOption";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../../store/user-slice";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={classes.header}>
      <div className={classes["header__left"]}>
        <img src={linkedinLogo} alt="Linkedin-icon" />
        <div className={classes["header__search"]}>
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className={classes["header__right"]}>
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SuperVisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notification" Icon={NotificationsIcon} />
        <HeaderOption avator={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
