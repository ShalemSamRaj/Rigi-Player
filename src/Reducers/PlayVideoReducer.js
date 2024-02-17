const initialState = { data: [], currentVideo: 0 };

const PlayVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetVideos":
      return {
        ...state,
        data: action.data,
      };
    case "SetCurrentIndex":
      return {
        ...state,
        currentVideo: action.index,
      };
    default:
      return state;
  }
};

export default PlayVideoReducer;
