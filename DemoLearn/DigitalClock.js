// import React from 'react'

function DigitalClock() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  function clock() {
    // setTime(new Date().toLocaleTimeString());
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }
  return (
    <>
      <div>DigitalClock</div>
      <p>{time}</p>
      <button onClick={clock}>show clock</button>
    </>
  );
}

// export default DigitalClock

ReactDOM.createRoot(document.getElementById("root")).render(<DigitalClock />);
