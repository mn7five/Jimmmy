import React, { useCallback } from "react";
import styles from './Track.module.css'

function Track(props) {
  function renderAction() {
    return (
      <button className={styles.TrackAction} >
        +
      </button>
    );
  };

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>track name</h3>
        <p>track artist or track album </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
