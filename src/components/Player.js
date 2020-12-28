import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../utils";

const Player = ({
  setIsPlaying,
  isPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  currentSong,
  setCurrentSong,
  setSongs,
}) => {
  React.useEffect(() => {
    const newSongs = songs.map((item) => {
      if (item.id === currentSong.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    switch (direction) {
      case "skip-back":
        if ((currentIndex - 1) % songs.length === -1) {
          setCurrentSong(songs[songs.length - 1]);
          playAudio(isPlaying, audioRef);
          return;
        }
        setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        break;
      case "skip-forward":
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        break;
      default:
        return setCurrentSong(songs[currentIndex]);
    }
    playAudio(isPlaying, audioRef);
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          icon={faAngleLeft}
          size="2x"
          className="skip-back"
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          className="play"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          icon={faAngleRight}
          size="2x"
          className="skip-forward"
        />
      </div>
    </div>
  );
};

export default Player;
