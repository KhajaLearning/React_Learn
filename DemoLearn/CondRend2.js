//an element that is null or undefined will render nothing
//Conditional rendering using 3 ways
// 1, if statement
// 2, ternary operator
// 3, logical and (&&) operator

// import React from 'react'

function CondRend2(props) {
  let x;
  if (props.condition) {
    x = <h3>true</h3>;
  } else {
    x = <h3>false</h3>;
  }
  return <div>{x}</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <CondRend2 condition={false} />
);
// export default CondRend1
