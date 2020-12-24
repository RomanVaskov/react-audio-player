import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              setCurrentSong={setCurrentSong}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
