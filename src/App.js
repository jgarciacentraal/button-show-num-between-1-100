import React from "react";
import "./styles.css";

export function App() {
  const [num, setNum] = React.useState();

  React.useEffect(() => {
    setNum(1);
  }, []);

  function handleClick() {
    setNum(() => Math.floor(Math.random() * (100 - 1)));
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
  return <div className="children">{value}</div>;
}
