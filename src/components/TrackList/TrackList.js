import React from "react";
import styles from './TrackList.module.css'
import Track from "../Track/Track";

function TrackList(props) {  
  return (
    <div className="TrackList">
      {
        props.tracks.map((track) => {
          return (
            <Track
              key={track.id}
              track={track}
            />
          );
        })
      }
    </div>
  );
};

export default TrackList;
