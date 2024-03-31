//conditional rendering with logical && (and) operator

function DropdownMenu1() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div>
      logical and && operator <br />
      <button onClick={handleClick}>Actions</button>
      {isOpen && (
        <ul>
          <li>Edit</li>
          <li>Remove</li>
          <li>Archive</li>
        </ul>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<DropdownMenu1 />);
