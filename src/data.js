import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "//chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "//mp3.chillhop.com/serve.php/?mp3=10076",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Day Light",
      cover:
        "//chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "//mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#ef8ea9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "//chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      artist: "Sworn",
      audio: "//mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#cd607d", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "//chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "//mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#ef8ea9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
