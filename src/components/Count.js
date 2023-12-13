import { useReducer } from "react"

const reducer = (state,action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Count = () => {
  const [counter, dispatch] = useReducer(reducer,{
    count: 0,
  });

  function increment() {
    dispatch({type: 'increment'})
  }
   function decrement() {
     dispatch({ type: "decrement"});
   }
  
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Count