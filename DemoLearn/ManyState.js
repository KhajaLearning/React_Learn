// import React from 'react'

function ManyState() {
  const [age, setAge] = React.useState(0);
  const [fruit, setFruit] = React.useState("");
  const [todos, setTodos] = React.useState([{}]);
  function stateChanges() {
    setAge(age + 1);
    setFruit("apple");
    setTodos([{ topic: "Learn Hooks" }]);
  }
  return (
    <div>
      <p>{age}</p>
      <p>{fruit}</p>
      <p>{JSON.stringify(todos)}</p>
      <button onClick={stateChanges}>Change</button>
    </div>
  );
}

// export default ManyState
ReactDOM.createRoot(document.getElementById("root")).render(<ManyState />);
