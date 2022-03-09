import { useEffect, useState } from "react";
import { comments as initData } from "../../public/comments";
import { Comment, Form } from "../";
import "./players.css";

// PARENT - STATE / DATA Management
const Comments = () => {
  // const [state, function to change it] = useState(initial state)
  const [comments, setComments] = useState(initData);

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

  const players = [
    {
      name: "David",
      score: 5,
      age: 34,
    },
    {
      name: "George",
      score: 6,
      age: 12,
    },
    {
      name: "Fran",
      score: 2,
      age: 9999,
    },
    {
      name: "Julia",
      score: 4,
      age: 20,
    },
    {
      name: "Alex",
      score: 0,
      age: 0,
    },
  ];

  const [sortBy, setSortBy] = useState("");

  const [sortedPlayers, setSortedPlayers] = useState(players);

  useEffect(() => {
    switch (sortBy) {
      case "name":
        setSortedPlayers(
          [...players].sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case "score":
        setSortedPlayers([...players].sort((a, b) => b.score - a.score));
        break;
      case "age":
        setSortedPlayers([...players].sort((a, b) => a.age - b.age));
        break;
      default:
        setSortedPlayers([...players]);
    }
  }, [sortBy]);

  useEffect(() => {
    console.log(sortedPlayers);
  }, [sortedPlayers]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Players</h1>
      <form style={{ marginBottom: "8px" }}>
        <h3>Sort By</h3>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value=''>I don't care</option>
          <option value='name'>name</option>
          <option value='score'>score</option>
          <option value='age'>age</option>
        </select>
      </form>
      {sortedPlayers.map((player) => (
        <div className='player-card' key={player.name}>
          <h1>{player.name}</h1>
          <h2>Score: {player.score}</h2>
          <h3>Age: {player.age}</h3>
        </div>
      ))}
      <h1>Comments</h1>
      {comments.map((comment) => {
        const { id, name, text, like } = comment;
        return (
          <Comment
            key={id}
            id={id}
            name={name}
            text={text}
            like={like}
            addLike={() => addALike(id)}
          />
        );
      })}
      <Form setComments={setComments} comments={comments} />
    </div>
  );
};

export default Comments;
