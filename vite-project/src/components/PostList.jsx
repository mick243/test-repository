import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post name={enteredAuthor} body={enteredBody} />
        <Post name="def" body="bbbb" />
      </ul>
    </>
  );
}

export default PostList;
