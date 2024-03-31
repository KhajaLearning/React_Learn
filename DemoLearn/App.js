const { useState } = React;

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setData([1, 2, 3, 4]);
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      {loading && <p>Loading... please wait..</p>}
      <pre>{JSON.stringify(data, null, " ")}</pre>
      <button onClick={loadData}>Load Data</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
