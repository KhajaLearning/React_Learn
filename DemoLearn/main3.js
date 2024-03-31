// function helloWorld() {
//     return <div className="container">Hello, This created from function component</div>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<helloWorld />)


//Component name should starts with first letter and then each word of first letter will be capitalize
function HelloWorld() {
  return (
    <div className="container">Hello, This created from function component</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
