import Student from "./components/One/Student";
import './components/One/mine.css'
import Form from "./components/One/Form";
import { useState } from "react";

function App() {

  const [students, setStudents] = useState([]);

  const addNewMember = (memInfo) => {
   setStudents((prevStudents) => [...prevStudents, memInfo]);
  }

  let content = <p>No member yet!</p>
  if(students.length > 0) {
       content = students.map((student)=> (
                  <Student
                    name={student.name}
                    address={student.address}
                    key={student.name}
                  />
       ));
  }

  return (
    <div className="App">
      {content}
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
