function ID() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
  
  class Item {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  const initialItems = [
    new Item(ID(), "First Item"),
    new Item(ID(), "Second Item"),
    new Item(ID(), "Third Item"),
  ];
  