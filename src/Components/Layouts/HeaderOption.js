import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import classes from "./HeaderOption.module.css";
const HeaderOption = ({ Icon, title, avator, onClick }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div onClick={onClick} className={classes.headerOption}>
      {Icon && <Icon className={classes["HeaderOption__icon"]} />}
      {avator && (
        <Avatar src={user?.photoUrl} className={classes["headerOption__icon"]}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className={classes["headerOption__title"]}>{title}</h3>
    </div>
  );
};

export default HeaderOption;
