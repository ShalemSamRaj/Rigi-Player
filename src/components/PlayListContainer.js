import React from "react";
import PlayList from "./PlayListComponent";

const PlayListContainer = () => {
  return (
    <div className="lg:w-1/3 w-full px-9 lg:p-5 mt-9 lg:mt-0 bg-slate-700 text-white">
      <PlayList></PlayList>
    </div>
  );
};

export default PlayListContainer;
