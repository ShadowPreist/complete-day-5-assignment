import { useEffect, useReducer } from "react";

const ACTION = {
      INCREMENT: "increment",
      DECREMENT: "decrement",
      UPDATE_KEY: "update key"
  }

const reducer = (state,action) => {
  switch(action.type) {
    case ACTION.DECREMENT:
      return {...state, count: state.count - 1}
    case ACTION.INCREMENT:
      return {...state, count: state.count + 1}
    case ACTION.UPDATE_KEY:
      return {...state, key: action.key}
    default:
      return state;
  }
}

function App() {

  useEffect(()=>{
    console.log("I am useEffect hook");
  },[])

  const [state,dispatch] = useReducer(reducer,{key: "", count: 0})
  
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: ACTION.UPDATE_KEY, key: e.target.value })
        }
      />
      <p>Your key is {state.key}</p>

      <div className="counter">
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      </div>
    </div>
  );
}

export default App;
