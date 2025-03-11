import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
        liked ? "bg-red-500 text-white" : "bg-gray-300 text-black"
      }`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
};

export default LikeButton;