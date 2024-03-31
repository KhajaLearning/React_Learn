// import React from 'react'
function handleClick() {
  console.log("clicked");
}

function ButtonEvents() {
  return <button onClick={handleClick}>Click Me!</button>; //Event binding
}

ReactDOM.createRoot(document.getElementById("root")).render(<ButtonEvents />);
