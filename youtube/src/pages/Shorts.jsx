import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shorts.css";

function Shorts() {
  const navigate = useNavigate();

  const videos = [
    { id: 1, title: "Big Buck Bunny 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: 2, title: "Sintel Trailer", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
    { id: 3, title: "Tears of Steel", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
    { id: 4, title: "Elephant Dream", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: 5, title: "For Bigger Blazes", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { id: 6, title: "For Bigger Escape", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4" },
    { id: 7, title: "For Bigger Fun", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
    { id: 8, title: "For Bigger Joyrides", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
    { id: 9, title: "For Bigger Meltdowns", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
    { id: 10, title: "Subaru Outback", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
  ];

  const [liked, setLiked] = useState({});
  const [subscribed, setSubscribed] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSubscribe = (id) => {
    setSubscribed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="shorts-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <h2 className="shorts-title">Home Videos</h2>

      <div className="shorts-wrapper">
        {videos.map((v) => (
          <div key={v.id} className="short-card">
            <video
              className="short-video"
              src={v.url}
              autoPlay
              muted
              loop
              controls
            ></video>

            <p className="short-text">{v.title}</p>

            {/* Buttons Section */}
            <div className="short-buttons">
              <button
                className={`like-btn ${liked[v.id] ? "liked" : ""}`}
                onClick={() => toggleLike(v.id)}
              >
                👍 {liked[v.id] ? "Liked" : "Like"}
              </button>

              <button
                className={`sub-btn ${subscribed[v.id] ? "subscribed" : ""}`}
                onClick={() => toggleSubscribe(v.id)}
              >
                {subscribed[v.id] ? "Subscribed ✔" : "Subscribe"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shorts;
