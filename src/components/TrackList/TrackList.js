import React from "react";
import styles from './TrackList.module.css'
import Track from "../Track/Track";

function TrackList(props) {
  return (
    <div className={styles.TrackList}>
      <Track />
    </div>
  );
};

export default TrackList;
