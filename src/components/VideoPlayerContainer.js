import React from "react";
import VideoPlayer from "./VideoPlayerComponent";

const VideoPlayerContainer = () => {
  return (
    <>
      <div className="lg:w-3/5 w-full bg-gradient-to-r from-slate-700 border rounded-xl p-5 mt-8 ml-9 mr-9 mb-2 sm:mr-9 lg:mr-0">
        <VideoPlayer></VideoPlayer>
      </div>
    </>
  );
};

export default VideoPlayerContainer;
