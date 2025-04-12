import PostList from "./components/PostList";

function App() {
  const posts = [
    { id: 1, author: "Marcelo", body: "React.js is awesome!" },
    { id: 2, author: "Lucas", body: "Learning React is fun!" },
    { id: 3, author: "Gustavo", body: "Components are reusable!" },
    { id: 4, author: "João", body: "State management is key!" },
  ];

  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}

export default App;