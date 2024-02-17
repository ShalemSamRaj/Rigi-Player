import React, { useRef } from "react";
import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const videos = useSelector((state) => state.data);
  const currentVideoIndex = useSelector((state) => state.currentVideo);
  const videoData = videos[currentVideoIndex];
  const videoRef = useRef(null);

  return (
    <>
      {videoData && (
        <div className="video-player min-w-full text-white sticky top-20 left-0">
          <video
            ref={videoRef}
            src={videoData.sources[0]}
            poster={videoData.thumb}
            controls
            controlsList="nodownload"
            autoPlay
            muted
            className="min-w-full rounded-xl mb-4"
          ></video>
          <div className="my-2 px-4 pb-5 pt-4 rounded-xl border border-gray-100">
            <h1 className="text-2xl lg:text-4xl my-2">{videoData.title}</h1>
            <h3 className="text-base lg:text-xl my-2">{videoData.subtitle}</h3>
            <p>{videoData.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
