// import React from 'react'
//Without props
function Greater2({ fname, lname }) {
  //   const { fname, lname } = props;
  return (
    <h1>
      Hello {fname} {lname} , Hi {fname + " " + lname}
    </h1>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <Greater2 fname="Harry" lname="Potter - M" />
);
// export default Greater1
