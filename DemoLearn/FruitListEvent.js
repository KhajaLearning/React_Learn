// import React from 'react'
function removeItem(fruit) {
  console.log(`Removed :  ${fruit}`);
}

function FruitListItems(props) {
  return (
    <li key={props.fruit.key} onClick={() => removeItem(props.fruit.name)}>
      {props.fruit.name}
    </li>
  ); //key is must for creating list items in li element in html
}

//whenever passing the args to the event handler must be wrapped into arrow function

function FruitListEvent(props) {
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
  <FruitListEvent fruits={data} />
);
