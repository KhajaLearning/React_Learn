//Create multiple helloWorld component inside App() component

function HelloWorld() {
  return (
    <div className="container">
      Hello, Function component with multiple time
    </div>
  );
}

function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
