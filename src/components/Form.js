import { useRef } from "react";
import Card from "./Card";

const Form = (props) => {
  // const [name,setName] = useState("");
  // const [address,setAddress] = useState("");
  // const [email,setEmail] = useState("");

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const emailInputRef = useRef();
  
  const addUser = (e) => {
    e.preventDefault();
    if (
      nameInputRef.current.value.trim().length === 0 ||
      addressInputRef.current.value.trim().length === 0 ||
      emailInputRef.current.value.trim().length === 0
    ) {
      window.confirm("Please fill all the neccessary fields");
    } else {
      const userInfo = {
        name: nameInputRef.current.value,
        address: addressInputRef.current.value,
        email: emailInputRef.current.value,
      };
      props.getUserInfo(userInfo);

      nameInputRef.current.value = emailInputRef.current.value = addressInputRef.current.value = ""
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
            // value={nameInputRef.current.value}
            ref={nameInputRef}
          />
        </div>
        <div className="form-div">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            ref={addressInputRef}
            // value={addressInputRef.current.value}
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            // value={emailInputRef.current.value}
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