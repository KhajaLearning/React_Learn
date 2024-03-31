class HelloWorldClassComponent extends React.Component {
  render() {
    return <div className="container">Hello, Created as Class component</div>;
  }
}

function App() {
  return (
    <>
      <HelloWorldClassComponent />
      <HelloWorldClassComponent />
      <HelloWorldClassComponent />
      <HelloWorldClassComponent />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
