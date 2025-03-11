import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center">
      <img
        src={post.profilePic}
        alt={post.username}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{post.username}</h2>
        <p className="text-gray-600">{post.content}</p>
      </div>
      <LikeButton />
    </div>
  );
};

export default PostCard;