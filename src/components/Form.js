import { useState } from "react";
import Card from "./Card";

const Form = (props) => {
  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [email,setEmail] = useState("");
  
  const addUser = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      address.trim().length === 0 ||
      email.trim().length === 0
    ) {
      window.confirm("Please fill all the neccessary fields");
    } else {
      const userInfo = {
        name,
        address,
        email,
      }
      props.getUserInfo(userInfo);
    }
      
  }
  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-div">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-div">
          <button type="submit" className="btn">
            Add User
          </button>
        </div>
      </form>
    </Card>
  );
}

export default Form