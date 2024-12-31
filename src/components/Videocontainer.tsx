"use client";

import React from "react";
import Image from "next/image";

const VideoContainer = () => {
  const handlePlayPause = () => {
    // const video = document.getElementById("videoElement");
    // if (video.paused) {
    //   video.play();
    // } else {
    //   video.pause();
    // }
  };

  return (
    
      <div
        className="bg-join bg-no-repeat bg-center   border rounded-[15px] z-0 flex justify-center items-center relative"
        style={{
         
          height: "100%",
          backgroundSize: "cover",
        }}
      >
   
        <video
          id="videoElement"
          className="absolute w-full h-full"
          
          src="/path_to_video.mp4"
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
            className="w-16 h-16 lg:w-24 lg:h-24"
          />
        </button>
      </div>
     
  );
};

export default VideoContainer;
