import PostCard from "./components/postcard";

const posts = [
  {
    id: 1,
    username: "John Doe",
    profilePic: "https://via.placeholder.com/50",
    content: "Hello world! This is my first post.",
  },
  {
    id: 2,
    username: "Jane Smith",
    profilePic: "https://via.placeholder.com/50",
    content: "Beautiful day outside! ☀️",
  },
  {
    id: 3,
    username: "Alex Johnson",
    profilePic: "https://via.placeholder.com/50",
    content: "React is awesome! 🚀",
  },
];

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;