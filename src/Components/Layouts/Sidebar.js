import React from "react";
import classes from "./Sidebar.module.css";
import { Avatar } from "@mui/material";
import background from "../../assets/background.jpg";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);
  const recentItem = (topic) => (
    <div className={classes["sidebar__recentItem"]}>
      <span className={classes["sidebar__hash"]}>#</span>
      <p>{topic}</p>
    </div>
  );
  console.log(user);

  return (
    <div className={classes.sidebar}>
      <div className={classes["sidebar__top"]}>
        <img src={background} alt="background-img" />
        <Avatar className={classes["sidebar__avitar"]} src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className={classes["sidebar__stats"]}>
        <div className={classes["sidebar__stat"]}>
          <p>Who viewed you</p>
          <p className={classes["stats__statNumber"]}>2,543</p>
        </div>

        <div className={classes["sidebar__stat"]}>
          <p>Views on post </p>
          <p className={classes["stats__statNumber"]}>2,448</p>
        </div>
      </div>

      <div className={classes["sidebar__bottom"]}>
        <p>Recent</p>
        {recentItem("React")}
        {recentItem("Javascript")}
        {recentItem("Material UI")}
        {recentItem("CSS-tricks")}
        {recentItem("Programming")}
        {recentItem("devloper")}
      </div>
    </div>
  );
};

export default Sidebar;
