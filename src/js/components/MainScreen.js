import React, { useState } from 'react';

import styles from './MainScreen.css';

const MainScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>This is MainScreen ToDo</h3>
      <ul className={styles.list}>
        <li>use CSSModule</li>
        <li>CI Deploy</li>
        <li>splash screen</li>
      </ul>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
};

export default MainScreen;
