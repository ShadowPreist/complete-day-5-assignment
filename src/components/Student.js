
const Student = ({name,address}) => {
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
    <>
      <p>name: {name}</p>
      <p>address: {address}</p>
    </>
  );
}

export default Student