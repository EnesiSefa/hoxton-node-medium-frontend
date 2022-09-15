import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { User, Post } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);
  return (
    <div className="App">
      <header className="App-header">a</header>
      <Main />
      <footer className="App-footer">c</footer>
    </div>
  );
}

export default App;
