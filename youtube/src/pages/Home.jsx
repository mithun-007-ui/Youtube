import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
function Home() {
const videos = [
  { id: 1, title: "Big Buck Bunny 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  { id: 2, title: "Sintel 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
  { id: 3, title: "Tears of Steel 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  { id: 4, title: "Elephants Dream 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
  { id: 5, title: "For Bigger Blazes 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { id: 6, title: "For Bigger Escape 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4" },
  { id: 7, title: "For Bigger Fun 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
  { id: 8, title: "For Bigger Joyrides 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  { id: 9, title: "For Bigger Meltdowns 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
  { id: 10, title: "Subaru Outback", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
  { id: 11, title: "We Are Going On Bullrun", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" },
  { id: 12, title: "What Car Can You Get", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" },
  { id: 13, title: "Vid 5s 1", url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
  { id: 14, title: "Vid 10s 1", url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4" },
  { id: 15, title: "Vid 20s 1", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },
  { id: 16, title: "Vid 30s 1", url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4" },
  { id: 17, title: "Vid 40s 1", url: "https://samplelib.com/lib/preview/mp4/sample-40s.mp4" },
  { id: 18, title: "Vid 1min 1", url: "https://samplelib.com/lib/preview/mp4/sample-1m.mp4" },
  { id: 19, title: "Vid 2min 1", url: "https://samplelib.com/lib/preview/mp4/sample-2m.mp4" },

  // DUPLICATES WITH DIFFERENT TITLES (works fine)
  { id: 20, title: "Big Buck Bunny 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  { id: 21, title: "Sintel 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
  { id: 22, title: "Tears of Steel 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  { id: 23, title: "Elephants Dream 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
  { id: 24, title: "For Bigger Blazes 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { id: 25, title: "For Bigger Escape 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4" },

  { id: 26, title: "Vid 5s 2", url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
  { id: 27, title: "Vid 10s 2", url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4" },
  { id: 28, title: "Vid 20s 2", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },
  { id: 29, title: "Vid 30s 2", url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4" },

  { id: 30, title: "Big Buck Bunny 3", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  { id: 31, title: "Sintel 3", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
  { id: 32, title: "Tears of Steel 3", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  { id: 33, title: "Elephants Dream 3", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
  { id: 34, title: "For Bigger Meltdowns 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },

  { id: 35, title: "Vid 1min 2", url: "https://samplelib.com/lib/preview/mp4/sample-1m.mp4" },
  { id: 36, title: "Vid 2min 2", url: "https://samplelib.com/lib/preview/mp4/sample-2m.mp4" },
  { id: 37, title: "Vid 1min 3", url: "https://samplelib.com/lib/preview/mp4/sample-1m.mp4" },
  { id: 38, title: "Vid 2min 3", url: "https://samplelib.com/lib/preview/mp4/sample-2m.mp4" },

  { id: 39, title: "Nature Clip 1", url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4" },
  { id: 40, title: "Nature Clip 2", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },

  { id: 41, title: "City Clip 1", url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4" },
  { id: 42, title: "City Clip 2", url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },

  { id: 43, title: "Beach Clip 1", url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4" },
  { id: 44, title: "Beach Clip 2", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },

  { id: 45, title: "Drone Shot 1", url: "https://samplelib.com/lib/preview/mp4/sample-1m.mp4" },
  { id: 46, title: "Drone Shot 2", url: "https://samplelib.com/lib/preview/mp4/sample-2m.mp4" },

  { id: 47, title: "Random Clip A", url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
  { id: 48, title: "Random Clip B", url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4" },
  { id: 49, title: "Random Clip C", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },
  { id: 50, title: "Random Clip D", url: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4" },
];

  const [subscribed, setSubscribed] = useState(videos.map(() => false));
  const [liked, setLiked] = useState(videos.map(() => false));
  function toggleSubscribe(index) {
    const updated = [...subscribed];
    updated[index] = !updated[index];
    setSubscribed(updated);
  }
  function toggleLike(index) {
    const updated = [...liked];
    updated[index] = !updated[index];
    setLiked(updated);
  }
  return (
    <div>
      <Navbar />

      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={video.id} className="video-card">

            <h3>{video.title}</h3>

            <video
              src={video.url}
              autoPlay
              muted
              loop
              controls
              className="video-player"
            />
            <button
              onClick={() => toggleSubscribe(index)}
              className={`video-btn ${
                subscribed[index] ? "subscribed" : "unsubscribed"
              }`}
            >
              {subscribed[index] ? "UNSUBSCRIBE" : "SUBSCRIBE"}
            </button>
           <button
              onClick={() => toggleLike(index)}
              className={`video-btn ${liked[index] ? "liked" : "unliked"}`}
            >
              {liked[index] ? "LIKED 👍" : "LIKE 👍"}
            </button>
            <a
              href={video.url}
              download
              className="video-btn download-btn"
            >
              DOWNLOAD ⬇
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
