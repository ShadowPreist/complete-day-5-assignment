import { useState } from "react";

const Form = (props) => {
  const [info,setInfo] = useState({
    name: "",
    address: "",
  })

  const track = (e,param)=> {
   setInfo((prevInfo) => ({
     ...prevInfo,
     [param]: e.target.value,
   }));
  }

  const showData = (e) => {
    e.preventDefault();
    // const {name} = info;
    // console.log("Hello" + name);
   props.addNewMember(info);
   setInfo((prevInfo)=> ({
    ...prevInfo,
    name: "",
    address: "",
   }))
  }
  return (
    <form onSubmit={showData}>
      <input
        type="text"
        placeholder="name"
        value={info.name}
        onChange={(e) => {
          track(e, "name");
        }}
      />
      <input
        type="text"
        placeholder="address"
        value={info.address}
        onChange={(e) => {
          track(e, "address");
        }}
      />
      <input type="submit" value="Add New Member"/>
    </form>
  );
}

export default Form