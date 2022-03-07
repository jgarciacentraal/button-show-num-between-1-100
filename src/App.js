import React from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = React.useState(() =>
    Math.floor(Math.random() * (100 - 1))
  );

  function handleClick() {
    setNum(Math.floor(Math.random() * (100 - 1)));
  }
  return (
    <div>
      <button className="button" onClick={handleClick}>
        Button
      </button>
      <Children value={num} />
    </div>
  );
}

function Children({ value }) {
  return <div>{value}</div>;
}
