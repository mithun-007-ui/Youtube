import React from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div style={{ padding: "20px" }}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        style={{
          padding: "8px 16px",
          marginBottom: "20px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ← Back
      </button>

      <h2>Home Videos</h2>

      {videos.map((v) => (
        <div key={v.id} style={{ marginBottom: "30px" }}>
          <h3>{v.title}</h3>
          <video
            width="100%"
            src={v.url}
            autoPlay
            muted
            loop
            controls
          ></video>
        </div>
      ))}
    </div>
  );
}

export default Shorts;
