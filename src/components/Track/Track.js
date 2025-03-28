import React, { useCallback } from "react";
import styles from './Track.module.css'

function Track(props) {
  function addTrack(event) {
    props.onAdd(props.track);
  }

  function removeTrack(event) {
    props.onRemove(props.track);
  }

  function renderAction() {
    if (props.isRemoval) {
      return (
        <button className={styles.TrackAction} onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className={styles.TrackAction} onClick={addTrack} >
        +
      </button>
    );
  };

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
