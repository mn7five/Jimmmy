import React, { useState, useCallback } from "react";
import styles from './SearchBar.module.css'

function SearchBar(props) {  
  return (
    <div className={styles.SearchBar}>
      <input placeholder="Enter A Song Title" />
      <button className={styles.SearchButton} >
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
