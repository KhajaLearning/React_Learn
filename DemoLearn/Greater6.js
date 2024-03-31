// import React from 'react'
//property  types
function Greater6(props) {
  return (
    <h1>
      Hello {props.employee.fname} {props.employee.lname}
    </h1>
  );
}
// const root = document.getElementById('root')
// const rootElement  = ReactDOM.createRoot(root)
// rootElement.render(<Greeter />);
Greater6.propTypes = {
  employee: PropTypes.object.isRequired,
};

let person = {
  fname: "harry",
  lname: "potter",
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Greater6 employee={person} />
);
