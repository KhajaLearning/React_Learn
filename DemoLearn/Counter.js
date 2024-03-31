function Counter() {
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>count: {count}</p>
      <button id="increBtn" onClick={increment}>
        Increase
      </button>
      <button id="decreBtn" onClick={decrement}>
        Decrease
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
