//CLASS component

class Greater4 extends React.Component {
  render() {
    return (
      <h1>
        Hello {this.props.fname} {this.props.lname} , Hi{" "}
        {this.props.fname + " " + this.props.lname}
      </h1>
    );
  }
}

const person = {
  fname: "Hermoine - H",
  lname: "Potter - M",
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Greater4 fname={person.fname} lname={person.lname} />
);
// export default Greater1
