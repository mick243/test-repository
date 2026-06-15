// function Post(props) {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.body}</p>
//     </div>
//   );
// }

// export default Post;

import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.posts}>
      <p className={styles.author}>{props.name}</p>
      <p className={styles.text}>{props.body}</p>
    </div>
  );
}

export default Post;
