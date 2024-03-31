function Container() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => setItems(initialItems), []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (updatedItem) => {
    let updatedItems = items.map((item) => {
      return item.id === updatedItem.id
        ? Object.assign({}, item, updatedItem)
        : item;
    });
    return setItems(updatedItems);
  };

  const removeItem = (removeThisItem) => {
    const filteredItems = items.filter((item) => item.id != removeThisItem.id);
    setItems(filteredItems);
  };

  return (
    <React.Fragment>
      {/* <Form item="" onSubmit={addItem} buttonValue="Add" /> */}
      <List items={items} onRemove={removeItem} onUpdate={updateItem} />
    </React.Fragment>
  );
}
