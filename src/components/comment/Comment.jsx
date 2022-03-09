// CHILD - STATE / DATA Presentation
const Comment = ({ id, name, text, like, likeOneMore }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
      <p>Likes: {like}</p>
      <button onClick={() => likeOneMore(id)}>Add a like!</button>
    </div>
  );
};

export default Comment;
