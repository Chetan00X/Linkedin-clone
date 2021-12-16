import classes from "./App.module.css";
import Header from "./Components/Layouts/Header";
import Sidebar from "./Components/Layouts/Sidebar";
import Feed from "./Components/Feed";
import { useSelector } from "react-redux";
import Login from "./Components/Login";

function App() {
  const user = useSelector((state) => state.userAuthentication);
  const login = user.login;
  console.log(login);
  return (
    <div className={classes.app}>
      <Header />
      {!login ? (
        <Login />
      ) : (
        <div className={classes["app__Body"]}>
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
