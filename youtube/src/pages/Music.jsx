import React from "react";
import { useNavigate } from "react-router-dom";

function Music() {
  const navigate = useNavigate();

  const songs = [
{ id: 1, title: "Big Buck Bunny", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
{ id: 2, title: "Sintel", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
{ id: 3, title: "Tears of Steel", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
{ id: 4, title: "Elephants Dream", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
{ id: 5, title: "For Bigger Blazes", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
{ id: 6, title: "For Bigger Escape", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4" },
{ id: 7, title: "For Bigger Fun", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
{ id: 8, title: "For Bigger Joyrides", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
{ id: 9, title: "For Bigger Meltdowns", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
{ id: 10, title: "Subaru Outback", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },

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

      <h1 style={{ marginBottom: "20px" }}>Tamil Music</h1>

      {/* Grid Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {songs.map((song) => (
          <div
            key={song.id}
            style={{
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 0 5px rgba(0,0,0,0.3)",
              textAlign: "center"
            }}
          >
            <h3>{song.title}</h3>

            <video
              src={song.url}
              autoPlay
              muted
              loop
              controls
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
