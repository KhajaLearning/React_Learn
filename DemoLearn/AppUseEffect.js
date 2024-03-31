// const { useEffect } = require("react");

const { useState, useEffect } = React;

function AppUseEffect() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setData([1, 2, 3, 4]);
      setLoading(false);
    }, 3000);
  }
  useEffect(loadData, []);
  return (
    <>
      {loading && <p>Loading... please wait..</p>}
      <pre>{JSON.stringify(data, null, " ")}</pre>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppUseEffect />);
