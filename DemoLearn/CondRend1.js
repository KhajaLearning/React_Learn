//an element that is null or undefined will render nothing

// import React from 'react'

function CondRend1() {
  let x;
  let y = undefined;
  let z = null;
  return (
    <div>
      <p>
        an element that is null or undefined will render nothing: {x}, {y}, {z}
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CondRend1 />);
// export default CondRend1
