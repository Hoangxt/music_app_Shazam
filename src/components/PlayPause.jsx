import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={35}
      onClick={handlePause}
      className=" text-gray-300 cursor-pointer"
    />
  ) : (
    <FaPlayCircle
      size={35}
      onClick={handlePlay}
      className=" text-gray-300 cursor-pointer"
    />
  );

export default PlayPause;
