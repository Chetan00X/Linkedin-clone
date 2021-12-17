import classes from "./Login.module.css";
import LoginLinkdin from "../assets/loginLinkdin.svg";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { login } from "../store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const auth = getAuth();
  const dispatch = useDispatch();
  const profilePicRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const registerHandler = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    setprofilePic(profilePicRef.current.value);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoUrl: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setprofilePic("");
    setPassword("");
    setEmail("");
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const profilePicChnageHandler = (e) => {
    setprofilePic(e.target.value);
  };

  return (
    <div className={classes.login}>
      <img src={LoginLinkdin} alt="Linkdin-logo" />

      <form>
        <input
          placeholder="Full name (required if registering)"
          type="text"
          value={name}
          onChange={nameChangeHandler}
        />
        <input
          ref={profilePicRef}
          type="text"
          placeholder="profilePic pic URL (optional)"
          value={profilePic}
          onChange={profilePicChnageHandler}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailChangeHandler}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={passwordChangeHandler}
        />

        <button type="submit" onClick={loginHandler}>
          Sign In
        </button>
      </form>
      <p>
        Not a memeber?
        <span className={classes["login__register"]} onClick={registerHandler}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
