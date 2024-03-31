// import React from 'react'
//property  types
function Greater5(props) {
  return (
    <h1>
      Hello {props.fname} {props.lname} , Hi {props.fname + " " + props.lname}
    </h1>
  );
}
// const root = document.getElementById('root')
// const rootElement  = ReactDOM.createRoot(root)
// rootElement.render(<Greeter />);
Greater5.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Greater5 lname="Potter" />
);
