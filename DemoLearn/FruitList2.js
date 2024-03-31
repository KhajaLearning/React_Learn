// import React from 'react'
function FruitListItems(props) {
  return <li key={props.fruit.key}>{props.fruit.name}</li>; //key is must for creating list items in li element in html
}
function FruitList2(props) {
  //   const items = props.fruits.map((fruit) => (
  //     <FruitListItems key={fruit.id} fruit={fruit} />
  //   ));
  //   console.log(items);
  return (
    <ul>
      {props.fruits.map((fruit) => (
        <FruitListItems key={fruit.id} fruit={fruit} />
      ))}
    </ul>
  );
}

const data = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "blueberry" },
  { id: 4, name: "banana" },
  { id: 5, name: "Grapes" },
  { id: 6, name: "Cherry" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <FruitList2 fruits={data} />
);
