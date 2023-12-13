import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Card from "./components/Card";
import Count from "./components/Count";

function App() {

  // const [students, setStudents] = useState([]);

  // const addNewMember = (memInfo) => {
  //  setStudents((prevStudents) => [...prevStudents, memInfo]);
  // }

  // let content = <p>No member yet!</p>
  // if(students.length > 0) {
  //      content = students.map((student)=> (
  //                 <Student
  //                   name={student.name}
  //                   address={student.address}
  //                   key={student.name}
  //                 />
  //      ));
  // }
 const [userInfo,setUserInfo] = useState([]);

 const getUserInfo = userInfoObj => {
  setUserInfo((prevUserInfo) => [...prevUserInfo, userInfoObj]);
 }
  return (
    <div className="App">
      <Form getUserInfo={getUserInfo}/>
      {userInfo.length > 0 ? (
        userInfo.map((user,index) => (
          <List key={index} userInfo={user}/>
        ))
        
      ) : (<Card css="mt-top">No user info yet</Card>)}

      <Count/>
      
    </div>
  );
}

export default App;
