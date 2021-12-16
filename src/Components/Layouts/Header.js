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

const Header = () => {
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
        <HeaderOption avator="https://media-exp1.licdn.com/dms/image/C5603AQFpsMyRDA7eTQ/profile-displayphoto-shrink_400_400/0/1636733069066?e=1644451200&v=beta&t=I7Ge884-cLNBI_rr6_qG7LDcUdkLAktZ1ELlQJh8UEo" />
      </div>
    </div>
  );
};

export default Header;
