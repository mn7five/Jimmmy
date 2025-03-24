import React, { useState, useCallback } from "react";
import styles from './App.module.css'
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function search(term) {
    setSearchResults([
      {
        id: "1",
        name: "name1",
        artist: "artist1",
        album: "album1"
      },
      {
        id: "2",
        name: "name2",
        artist: "artist2",
        album: "album2"
      },
      {
        id: "3",
        name: "name3",
        artist: "artist3",
        album: "album3"
      },
      {
        id: "4",
        name: "name4",
        artist: "artist4",
        album: "album4"
      },
      {
        id: "5",
        name: "name5",
        artist: "artist5",
        album: "album5"
      }
    ]);
  }

  function addTrack(track) {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }

  function removeTrack(track) {
    setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {

  }

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search} />
        <div className={styles.AppPlaylist}>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>        
      </div>
    </div>
  );
};

export default App;
