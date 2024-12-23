"use client";

import React from "react";
import Image from "next/image";

const VideoContainer = () => {
  const handlePlayPause = () => {
    const video = document.getElementById("videoElement");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    
      <div
        className="bg-join bg-center w-[804px] h-[559px] border rounded-[15px] z-0 flex justify-center items-center relative"
        style={{
          width: "804px",
          height: "563px",
          backgroundSize: "100% 100%",
        }}
      >
   
        <video
          id="videoElement"
          className="absolute w-full h-full"
          style={{
            objectFit: "cover",
          }}
          src="/path_to_video.mp4"
          type="video/mp4"
          controls={false}
          muted
        ></video>

        
        <button
          onClick={handlePlayPause}
          className="z-10 bg-transparent"
        >
          <Image
            src="/icon_play.svg"
            alt="Play Video"
            width={126}
            height={107}
          />
        </button>
      </div>
     
  );
};

export default VideoContainer;
