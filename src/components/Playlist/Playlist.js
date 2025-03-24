import React, { useCallback } from "react";
import styles from './Playlist.module.css'
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  function handleNameChange(event) {
    props.onNameChange(event.target.value);
  }

  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      <TrackList 
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className={styles.PlaylistSave} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
