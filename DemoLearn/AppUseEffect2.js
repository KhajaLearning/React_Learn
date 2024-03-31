const { useState, useEffect } = React;

function AppUseEffect2() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (page === 1) {
        setData([1, 2, 3, 4, 5]);
      } else if (page === 2) {
        setData([6, 7, 8, 9, 10]);
      } else if (page === 3) {
        setData([11, 12, 13, 14, 15]);
      } else {
        setData(null);
      }
    }, 3000);
  }

  useEffect(loadData, [page]);
  function handleNext() {
    // setPage((currentPage) => currentPage + 1);
    setPage(page + 1);
  }

  function handlePrev() {
    // setPage((currentPage) => currentPage - 1);
    setPage(page - 1);
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
      <span>Current Page: {page}</span>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Prev</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppUseEffect2 />);
