const { useRef } = React;

function UncontrolledFormFileHandle() {
  const fileInput = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(fileInput.current);
    if (!fileInput) return;
    alert(`Selected file - ${fileInput.current.files[0].name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<UncontrolledFormFileHandle />);