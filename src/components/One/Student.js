import { useState } from "react";

const Student = ({name: InitialName,address}) => {
const [name, setName] = useState(InitialName);
 const nameChange = () => {
   let newName = prompt("Type your new name");
   setName(newName);

 };
 
  return (
    // <>
    //   <ul>
    //     {students.map((student) => (
    //       <>
    //         <li>Name: {student.name}</li>
    //         <li>Address: {student.address}</li>
    //         <br />
    //       </>
    //     ))}
    //   </ul>
    // </>

    <ul>
      <li>
          <p>name: {name}</p>
          <p>address: {address}</p>
      </li>
    </ul>
  );
}

export default Student