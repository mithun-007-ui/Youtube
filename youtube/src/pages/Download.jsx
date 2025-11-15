import React from 'react'
import { useNavigate } from 'react-router-dom';

function Download() {
      const navigate = useNavigate();

  const videos = [
    { id: 1, title: "Video 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: 2, title: "Video 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
    { id: 3, title: "Video 3", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
    { id: 4, title: "Video 4", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: 5, title: "Video 5", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { id: 6, title: "Video 6", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4" },
  ];

  return (
    <div style={{ padding: "20px" }}>

      {/* Back Button */}
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
        onClick={() => navigate("/")}
      >
        ⬅ Back
      </button>

      {/* Video Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <h3>{video.title}</h3>

            <video
              src={video.url}
              controls
              autoPlay
              muted
              loop
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
  


export default Download