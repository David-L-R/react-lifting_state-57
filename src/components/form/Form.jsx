import React, { useState } from "react";
import { comments } from "../../public/comments";
import "./form.css";

export default function Form({ setComments }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [nameError, setNameError] = useState("");
  const [textError, setTextError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // create a new id
    // set like to 0
    // save the comment to the list

    if (!name) {
      setNameError("Name cannot be empty");
      return;
    }

    setNameError("");

    if (!text) {
      setTextError("Text cannot be empty");
      return;
    }

    setTextError("");

    const comment = {
      name: name,
      text: text,
      id: Math.random(),
      like: 0,
    };

    setComments([...comments, comment]);
  };

  return (
    <form className='form'>
      <div className='input-container'>
        <label htmlFor='name'>Name</label>
        <input
          name='name'
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        {nameError && <p className='error'>{nameError}</p>}
      </div>
      <div className='input-container'>
        <label htmlFor='text'>Text</label>
        <input
          name='text'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        {textError && <p className='error'>{textError}</p>}
      </div>
      <button onClick={submit}>SUBMIT</button>
    </form>
  );
}
