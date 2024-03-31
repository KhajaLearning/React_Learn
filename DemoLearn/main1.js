//create DOM using virtual DOM using react js 25-12-2023
const rootElement = document.getElementById("root");
// const element = React.createElement(
//   "div", //Element type
//   {
//     className: "container", //Element property
//     // children: ["Hello world using react from property object", "welcome"],
//     children: [
//       "<p>Hello world using react from property object</p>",
//       "welcome",
//     ],
//   }
//   //"Hello world using react" //Element value or create child element
// );

//using JSX
const fname = "Harry";
const mname = "Potter";
const lname = "H";
const logoImg = {
  name: "Image",
  title: "Harry",
  path: "./images/Harry_Potter.jpg",
};
const element = (
    <React.Fragment>
  <div className="container">
    <p>
      Hello world using react JSX format with BABEL compiler inside of paragraph
      element
    </p>
    <h1>
      Hi {fname}
      {mname + " " + lname}!!!
    </h1>
    <img src={logoImg.path} alt={logoImg.name} title={logoImg.title} />
  </div>
  <h2>Outside of DIV element</h2>
  <ul>
    <li>Home</li>
    <li>About</li>
  </ul>
  </React.Fragment>
);

console.log("react element", element);
//create root element for virtual DOM
const root = ReactDOM.createRoot(rootElement);

//add the element into virtual DOM
root.render(element);
