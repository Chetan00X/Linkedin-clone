import classes from "./App.module.css";
import Header from "./Components/Layouts/Header";
import Sidebar from "./Components/Layouts/Sidebar";
import Feed from "./Components/Feed";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Components/Login";
import { logout, login } from "./store/user-slice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is logged in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [auth, dispatch]);

  return (
    <div className={classes.app}>
      <Header />
      {!user ? (
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
