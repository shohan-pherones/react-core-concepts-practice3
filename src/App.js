import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Posts></Posts>
    </div>
  );
}

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <ShowPost id={post.id} title={post.title} body={post.body}></ShowPost>
      ))}
    </div>
  );
}

function ShowPost(props) {
  return (
    <div className="posts">
      <h2>{props.id}</h2>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
