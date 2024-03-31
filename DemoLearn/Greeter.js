// import React from 'react'

function Greeter(props) {
  return (
    <h1>
      Hello {props.fname} {props.lname} ,
      Hi {props.fname + " " + props.lname}
    </h1>
  );
}
// const root = document.getElementById('root')
// const rootElement  = ReactDOM.createRoot(root)
// rootElement.render(<Greeter />);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Greeter fname="Harry" lname="Potter" />
);
