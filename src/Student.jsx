import React from "react";

function Student({ student, onRemove }) {
  const style = {
    margin: "25px"
  }
  return (
    <div style={style}>
      <b>이름 : {student.name}</b>
      &nbsp; / &nbsp;
      <b>시간 : {student.time}</b>
      <div><b>내용 : {student.todo}</b></div>
      <button onClick={() => onRemove(student.id)}>삭제</button>
      <hr />
    </div>
  );
}

export default Student;