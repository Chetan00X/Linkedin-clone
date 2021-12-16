import { Avatar } from "@mui/material";
import classes from "./HeaderOption.module.css";
const HeaderOption = ({ Icon, title, avator }) => {
  console.log(avator);
  return (
    <div className={classes.headerOption}>
      {Icon && <Icon className={classes["HeaderOption__icon"]} />}
      {avator && (
        <Avatar src={avator} className={classes["headerOption__icon"]} />
      )}
      <h3 className={classes["headerOption__title"]}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
