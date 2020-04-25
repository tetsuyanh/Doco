import React from 'react';

import styles from './TextMenu.css';

const TextMenu = ({ placeholder, updateText, clickBack }) => {
  const onChange = (event) => {
    updateText(event.target.value);
  };

  return (
    <div className={styles.operation}>
      <form className={styles.form}>
        <input
          type='text'
          className={styles.input}
          placeholder={placeholder}
          onChange={onChange}
        />
      </form>
      <div className={styles.backWrapper}>
        <button className={styles.back} onClick={clickBack}>
          もどる
        </button>
      </div>
    </div>
  );
};

export default TextMenu;
