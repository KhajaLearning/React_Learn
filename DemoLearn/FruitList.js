// import React from 'react'

function FruitList(props) {
  console.log(props.fruits);

  const items = props.fruits.map((fruit) => (
    <li key={fruit.id}>{fruit.name}</li>
  ));
  console.log(items);
  return <ul>{items}</ul>;
}

const data = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "blueberry" },
  { id: 4, name: "banana" },
  { id: 5, name: "kiwi" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <FruitList fruits={data} />
);
