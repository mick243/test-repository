// function Post(props) {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.body}</p>
//     </div>
//   );
// }

// export default Post;

import classes from "./Post.module.css";

function Post({ author, body }) {
  return (
    <div className={classes.posts}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}

export default Post;
