import React from "react";
import { useNavigate } from "react-router-dom";
import "./Download.css";

function Download() {
  const navigate = useNavigate();

  const videos = [
    { id: 1, title: "Video 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: 2, title: "Video 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
    { id: 3, title: "Video 3", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
    { id: 4, title: "Video 4", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: 5, title: "Video 5", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { id: 6, title: "Video 6", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4" }
  ];

  return (
    <div className="download-container">
      <button className="back-btn" onClick={() => navigate("/")}>⬅ Back</button>

      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <h3>{video.title}</h3>
            <video src={video.url} controls autoPlay muted loop className="video-player" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Download;
