import React, { useState } from 'react';

import styles from './SelectMenu.css';

const SelectMenu = ({
  placeholder,
  candidates,
  updateCandidate,
  clickBack,
}) => {
  const [category, setCategory] = useState('');

  const onChange = (event) => {
    setCategory(event.target.value);
    updateCandidate(event.target.value);
  };

  return (
    <div className={styles.operation}>
      <form className={styles.form}>
        <select className={styles.select} value={category} onChange={onChange}>
          <option value='' key='init'>
            {placeholder}
          </option>
          {candidates.map((c, index) => {
            return (
              <option value={c} key={index}>
                {c}
              </option>
            );
          })}
        </select>
      </form>
      <div className={styles.backWrapper}>
        <button className={styles.back} onClick={clickBack}>
          もどる
        </button>
      </div>
    </div>
  );
};

export default SelectMenu;
