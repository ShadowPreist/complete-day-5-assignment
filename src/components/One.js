import "./One.css";

function One({data,height}) {
 const {address,name} = data;
  return (
    <>
      <h1>My name is: {name}</h1>
      <h2>My addresss is : {address}</h2>
      <p>My height is {height} cm</p>
    </>
  );
}

export default One;