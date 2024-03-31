// import React from 'react'
//Sending object as input args of function
function Greater3({ fname, lname }) {
  //   const { fname, lname } = props;
  return (
    <h1>
      Hello {fname} {lname} , Hi {fname + " " + lname}
    </h1>
  );
}

const person = {
  fname: "Harry - H",
  lname: "Potter - M",
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Greater3 fname={person.fname} lname={person.lname} />
);
// export default Greater1
