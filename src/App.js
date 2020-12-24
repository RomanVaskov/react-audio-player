import React from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import data from "./utils";
import "./styles/app.scss";

function App() {
  const audioRef = React.useRef(null);
  const [songs, setSongs] = React.useState(data());
  const [currentSong, setCurrentSong] = React.useState(songs[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  // State
  const [songInfo, setSongInfo] = React.useState({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
      ></audio>
    </div>
  );
}

export default App;
