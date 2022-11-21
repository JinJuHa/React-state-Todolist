import React from "react";

function CreateStudent({ name, time, todo, onDataChange, onCreate }) {
  const style = {
    width: "600px",
    margin: "20px",
    padding: "10px",
  };

  return (
    <div style={style}>
      <input
        type="text"
        name="name"
        placeholder="닉네임"
        onChange={onDataChange}
        value={name}
      />
      &nbsp;&nbsp;
      <input
        type="text"
        name="time"
        placeholder="시간"
        onChange={onDataChange}
        value={time}
      />
      &nbsp;&nbsp;
      <input
        type="text"
        name="todo"
        placeholder="내용"
        onChange={onDataChange}
        value={todo}
      />
      &nbsp;&nbsp;
      <button onClick={onCreate}>추가</button>
    </div>
  );
}

export default CreateStudent;