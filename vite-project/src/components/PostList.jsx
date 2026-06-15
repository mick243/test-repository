import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post name="abc" body="aaaa" />
        <Post name="def" body="bbbb" />
      </ul>
    </>
  );
}

export default PostList;
