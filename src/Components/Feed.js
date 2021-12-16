import React, { useState, useEffect } from "react";
import classes from "./Feed.module.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";

import {
  onSnapshot,
  collection,
  query,
  orderBy,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import db from "./Firebase.js";

const Feed = () => {
  const [post, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const sendPostHandler = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, "posts");
    const payload = {
      name: "chetan Srivastava",
      description: "this is a test",
      message: input,
      photoUrl: "./",
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(collectionRef, payload);
    setInput("");
  };

  return (
    <div className={classes["feed"]}>
      <div className={classes["feed__inputContainer"]}>
        <div className={classes["feed__input"]}>
          <CreateIcon />
          <form>
            <input type="text" onChange={inputChangeHandler} value={input} />
            <button type="submit" onClick={sendPostHandler}>
              Send
            </button>
          </form>
        </div>
        <div className={classes["feed__inputOptions"]}>
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title="Photo" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#70B5F9"
          />
        </div>
      </div>
      {post.map(({ name, description, message, photoUrl, id }) => (
        <Post
          keys={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
