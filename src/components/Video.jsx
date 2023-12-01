import React, { useState, createRef } from "react";
// import { Playlist } from "reactjs-video-playlist-player";

import "./Video.css";
import axios from "axios";
let video = null;
function VideoContainer() {
  axios
    .get("http://localhost:5000/video/stream")
    .then((res) => {
      if (res.data) {
        video = res.data;
        console.log(video);
      } else {
        console.error("Invalid server response:", res);
        // Handle unexpected server response or inform the user appropriately
      }
    })
    .catch((error) => {
      console.error("Error initiating Facebook authentication: ", error);
      // Handle errors or inform the user appropriately
    });
  const [videoList, setVideoList] = useState([
    {
      thumbnail:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      url: { video },
      imgAlt: "Image 1 not found",
    },
    {
      thumbnail:
        "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      imgAlt: "Image 2 not found",
    },
    {
      thumbnail:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      imgAlt: "Image 3 not found",
    },
    {
      thumbnail: "https://wallpapercave.com/wp/WpDsR4v.jpg",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      imgAlt: "Image 4 not found",
    },
    {
      thumbnail: "https://ik.imagekit.io/ikmedia/backlit.jpg",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      imgAlt: "Image 5 not found",
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(0);
  const vidRef = createRef(null);
  const user =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
  const params = {
    videos: videoList,
    autoPlay: true,
    showQueue: true,
    playForward: true,
    defaultQueueItemPlaceholderThumbnail: user,
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    vidRef: vidRef,
    styles: {
      // Example of styles to adjust the thumbnail alignment
      playlist: {
        display: "flex",
        flexDirection: "row", // Or 'column', based on your preference
        justifyContent: "space-between", // Or other alignment properties
      },
    },
  };

  return (
    <div className="App">
      <h3 id="title"></h3>
      <div>
        <Playlist playlistParams={params} />
      </div>
    </div>
  );
}

export default VideoContainer;
