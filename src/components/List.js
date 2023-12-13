import Card from "./Card"
const List = (props) => {
  const {name,address,email} = props.userInfo;
  return (
    <div key={email}>
      <Card css={"mt-top"}>
            <p>name: {name}</p>
            <p>address: {address}</p>
            <p>email: {email}</p>
      </Card>
    </div>
  );
}

export default List