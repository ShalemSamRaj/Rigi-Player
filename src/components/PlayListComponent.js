import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentVideoIndex } from "../Actions/Actions";
import Hamburger from "./Hamburger";
import "./PlayListComponent.css";
import { SetVideos } from "../Actions/Actions.js";

const PlayList = () => {
  const dispatch = useDispatch();
  const playList = useSelector((state) => state.data);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const handlePlay = (index) => {
    dispatch(SetCurrentVideoIndex(index));
  };
  useEffect(() => {
    setFilteredList(playList);
  }, [playList]);

  const handleSort = () => {
    let videoItems = [...playList];
    const draggedItemContent = videoItems.splice(dragItem.current, 1)[0];
    videoItems.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(SetVideos(videoItems));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      return setFilteredList(playList);
    }
    setFilteredList(
      playList.filter((p) => {
        return (
          p.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(event.target.value.toLowerCase())
        );
      })
    );
  };
  return (
    <>
      <div className="size-full lg:mt-3 mt-1">
        <p className="text-xl font-bold mb-2">Play list</p>
        <input
          className="p-2 mb-4 w-full rounded-lg bg-transparent border outline-none"
          placeholder="search..."
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        ></input>
        {filteredList.length > 0 ? (
          filteredList.map((p, index) => {
            return (
              <div
                className="mb-5 border rounded-lg flex items-center lg:justify-between p-4 w-500 min-h-40 cursor-pointer bg-blue-950"
                key={p.title}
                onClick={(e) => handlePlay(index)}
                draggable
                onDragStart={(e) => (dragItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <img
                  src={p.thumb}
                  width="30%"
                  height="100%"
                  alt={p.title}
                  className="rounded-xl"
                />
                <div className="ml-5 truncate">
                  <p className="text-2xl font-bold">{p.title}</p>
                  <p className="text-xl">{p.subtitle}</p>
                  <p className="text-xs">
                    {p.description.length > 50
                      ? `${p.description.substring(0, 50)}...`
                      : p.description}
                  </p>
                </div>
                <div className="absolute right-12 lg:static">
                  <Hamburger />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-xl">No videos found.</p>
        )}
      </div>
    </>
  );
};

export default PlayList;
