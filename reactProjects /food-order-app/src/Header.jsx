import React from "react";
import styles from './Header.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Saucy Tango</h1>
      <p>Indulge in Saucy Tango's rich flavors and bold spices entice your taste buds to dance the night away.</p>
    </header>
  );
};

export default Header;