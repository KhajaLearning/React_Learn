// import React from 'react'

function Box() {
  const [state, setState] = React.useState({
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  });

  function changePos(e) {
    setState((state) => ({ ...state, left: e.pageX, top: e.pageY }));
  }

  return (
    <div onMouseMove={(e) => changePos(e)}>
      <p>
        Theodore II Laskaris (1221/1222–1258) was a Byzantine emperor who ruled
        the Empire of Nicaea from 1254 until his death. Nicaea was a successor
        state to the Byzantine Empire, after crusaders captured the Byzantine
        capital, Constantinople, in 1204 during the Fourth Crusade. Theodore
        began to write treatises on theological, historical and philosophical
        themes in his youth. From around 1242, he was co-ruler with his father,
        and his relationship with some prominent aristocrats grew tense.
        Succeeding his father in 1254 Theodore replaced many aristocratic
        officials and generals with loyalists, including some of low birth. In
        1256, he repelled a Bulgarian invasion of Thrace and Macedonia and
        forced Epirus to cede Dyrrachium on the Adriatic Sea. Epirus allied with
        Serbia and Sicily, and jointly invaded Nicaea in 1257; Nicaea's new
        generals could not resist the invasion. Theodore died in 1258, leaving
        an underage son, John IV. Michael Palaiologos seized the regency, and
        usurped the throne soon afte
      </p>
      <p onMouseOverCapture={(e) => changePos(e)}>
        {state.left + "," + state.top}
      </p>
    </div>
  );
}

// export default Box
ReactDOM.createRoot(document.getElementById("root")).render(<Box />);
