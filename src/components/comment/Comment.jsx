import "./comment.css";
// CHILD - STATE / DATA Presentation
const Comment = ({ id, name, text, like, addLike }) => {
  return (
    <div className='comment-card'>
      <h1>{name}</h1>
      <p>{text}</p>
      <p>Likes: {like}</p>
      <button onClick={addLike}>Like</button>
    </div>
  );
};

export default Comment;
