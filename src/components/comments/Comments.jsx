import { useState } from "react";
import { comments as initData } from "../../public/comments";
import Comment from "../comment/Comment";

// PARENT - STATE / DATA Management
const Comments = () => {
  // const [state, function to change it] = useState(initial state)
  const [comments, setComments] = useState(initData);

  const addTom = () => {
    const newComments = [
      ...comments,
      { id: 3, name: "Tom", text: "", like: 1000 },
    ];

    setComments(newComments);
  };

  const addALike = (id) => {
    console.log(id);

    const newComments = comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          like: comment.like + 1,
        };
      } else {
        return { ...comment };
      }
    });

    setComments(newComments);
  };

  return (
    <div>
      {comments.map((comment) => {
        const { id, name, text, like } = comment;
        return (
          <Comment
            key={id}
            id={id}
            name={name}
            text={text}
            like={like}
            likeOneMore={addALike}
          />
        );
      })}
      <button onClick={addTom}>Add Tom</button>
    </div>
  );
};

export default Comments;
