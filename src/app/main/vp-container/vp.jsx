// VIDEO-PLAYER CONTAINER
import React from "react";

const VideoPlayer = () => {
  return (
    <div className="video-player-container">
      <div className="content-section">
        <div className="video-player">
        <iframe
          fs="1"
          height="650"
          src="https://www.youtube.com/embed/N9_2lzNPz8Q"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>
      <span className='number-container4'>IV</span>
    </div>
  );
};
export default VideoPlayer;
