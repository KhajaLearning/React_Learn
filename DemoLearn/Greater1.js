// import React from 'react'
//Destructuring props
function Greater1(props) {
  const { fname, lname } = props;
  return (
    <h1>
      Hello {fname} {lname} , Hi {fname + " " + lname}
    </h1>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <Greater1 fname="Harry" lname="Potter M" />
);
// export default Greater1
