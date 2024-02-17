const SetVideos = (data) => {
  return {
    type: "SetVideos",
    data,
  };
};

const SetCurrentVideoIndex = (index) => {
  return {
    type: "SetCurrentIndex",
    index,
  };
};
export { SetVideos, SetCurrentVideoIndex };
