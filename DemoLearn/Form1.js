//27-01-2024 controlled forms in react

function Form1() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value.toUpperCase());
  };

  return (
    <form>
      <input type="text" value={value} onChange={handleChange} />
      <pre>{value}</pre>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Form1 />);
