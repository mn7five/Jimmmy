import React, { useCallback } from "react";
import styles from './Playlist.module.css'
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      <TrackList 
        tracks={props.playlistTracks}
      />
      <button className={styles.PlaylistSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
