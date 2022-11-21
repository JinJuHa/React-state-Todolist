import React, { useState, useRef } from "react";
import Student from "./Student";
import CreateStudent from "./CreateStudent";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

function StudentList() {
  const [students, setStudents] = useState([
  ]);
  const [value, onChange] = useState(new Date());

  const onRemove = (id) => {
    // student.id 가 매개변수로 작성하지 않는 데이터들만 추출해서 새로운 배열을 만듬
    // = student.id 가 id 인 것을 제거함
    setStudents(students.filter((student) => student.id !== id));
  };

  const nextId = useRef(0);

  //입력상자에서 사용할 값을 state로 관리
  const [inputs, setInputs] = useState({
    name: "",
    time: "",
    todo: ""
  });

  //비구조화 할당 - state값을 각각 변수에 담기
  const { name, time, todo } = inputs;

  //데이터 변경함수
  const onDataChange = (e) => {
    //여기서의 name과 value는 값이 변경되는 input태그의 속성을 비구조화할당
    const { name, value } = e.target;

    //state값 변경
    setInputs({
      ...inputs, //변경되는 것 외의 나머지 속성값을 의미하는 나머지 패턴
      [name]: value //내부에서 밖의 변수를 속성명으로 사용시 [변수명]
    });
  };

  const onCreate = () => {
    //새롭게 배열 데이터를 추가하는 함수
    const student = {
      id: "st00" + nextId.current,
      name,
      time,
      todo
    };
    setStudents([...students, student]);

    setInputs({
      name: "",
      time: "",
      todo: ""
    });
    nextId.current += 1;
  };

  return (
    <div>
      <CreateStudent
        name={name}
        time={time}
        todo={todo}
        onDataChange={onDataChange}
        onCreate={onCreate}
      />
      {students.map((student) => (
        <Student student={student} key={student.id} onRemove={onRemove} />
      ))}
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
    </div>
  );
}

export default StudentList;
