import React from "react";
import styles from './SearchResults.module.css'
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} />
    </div>
  );
};

export default SearchResults;
