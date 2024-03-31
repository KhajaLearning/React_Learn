//Uncontrolled forms using useRef() in react

function UncontrolledForm1() {
  const inputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} defaultValue="Harry" />
      <button>Submit</button>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <UncontrolledForm1 />
);
