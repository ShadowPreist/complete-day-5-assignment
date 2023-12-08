import One from "./components/One";
import Student from "./components/Student";
function App() {
  const students = [
    {
      name: "Kyaw Kyaw",
      address: "ygn",
    },
    {
      name: "Mg MG",
      address: "sagaing",
    },
    {
      name: "Aung Aung",
      address: "mdy",
    },
  ];
  return (
    <div className="App">
      <h1>My First React Project</h1>
      <One
        data={{ name: "Htoo Aung Lin", address: "California" }}
        height={183}
      />
      {/* <Student students={students}/> */}
      <Student
        name={students[0].name.toUpperCase()}
        address={students[0].address}
      />
      <Student
        name={students[1].name}
        address={students[1].address}
      />
      <Student
        name={students[2].name}
        address={students[2].address}
      />
    </div>
  );
}

export default App;
