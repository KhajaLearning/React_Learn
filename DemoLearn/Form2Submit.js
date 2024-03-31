//27-01-2024 controlled forms in react

function Form2Submit() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //to prevent the submit action in form
    console.log(username, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>

      <pre>
        {password} {username}
      </pre>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Form2Submit />);
