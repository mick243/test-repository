const name = ["aaaa", "1234567890"];

function Post() {
  const choseName = Math.random() > 0.5 ? name[0] : name[1];

  return (
    <div>
      <p>{choseName}</p>
      <p>un happy</p>
    </div>
  );
}

export default Post;
