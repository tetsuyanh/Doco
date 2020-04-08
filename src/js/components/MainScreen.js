import React, { useState } from "react";

const MainScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>This is MainScreen ToDo</h3>
      <ul>
        <li>use CSSModule</li>
        <li>CI Deploy</li>
      </ul>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
};

export default MainScreen;
