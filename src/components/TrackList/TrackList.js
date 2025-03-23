import React from "react";
import styles from './TrackList.module.css'
import Track from "../Track/Track";

function TrackList(props) {  
  return (
    <div className={styles.TrackList}>
      {
        props.tracks.map((track) => {
          return (
            <Track
              key={track.id}
              track={track}
              onAdd={props.onAdd}
            />
          );
        })
      }
    </div>
  );
};

export default TrackList;
