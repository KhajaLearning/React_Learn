// import React from 'react'

function ManyState() {
  const [state, setState] = React.useState({
    age: 0,
    fruit: "Dates",
    todos: { topic: "Learn Hooks" },
  });
  function stateChanges() {
    setState((state) => ({
      ...state,
      age: 20,
      fruit: "banana",
      todos: { topic: "Learn Hooks" },
    }));
  }
  return (
    <div>
      <p>{state.age}</p>
      <p>{state.fruit}</p>
      <p>{JSON.stringify(state.todos)}</p>
      <button onClick={stateChanges}>Change</button>
    </div>
  );
}

// export default ManyState
ReactDOM.createRoot(document.getElementById("root")).render(<ManyState />);
