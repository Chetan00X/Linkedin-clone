import classes from "./Login.module.css";
import LoginLinkdin from "../assets/loginLinkdin.svg";
import { useState } from "react";
import { signup, useAuth, upload } from "./Firebase";
import { authenticationAction } from "../store/user-slice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const currentUser = useAuth();
  const dispatch = useDispatch();

  const registerHandler = async () => {
    if (!name) {
      return alert("Please enter a full name ");
    }
    try {
      await signup(name, email);
      console.log(currentUser.email);
      dispatch(
        authenticationAction.login({
          email: currentUser.email,
          uid: currentUser.uid,
          displayName: name,
          photoUrl: profilePic,
        })
      );
    } catch (error) {
      alert(error.message);
    }
    upload(profilePic, currentUser);
  };

  const loginHandler = (e) => {
    e.preventDefault();
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
