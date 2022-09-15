import { useState, useEffect } from "react";
import { Post } from "../types";

export default function Main() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);
  return (
    <main className="App-main">
      <ul className="posts">
        {posts.map((post) => (
          <li>
            <div className="list-item-thumbnail">
              <img src={post.imageUrl} alt="" />
            </div>
            <div className="list-item-info">
              <div className="profile-pic-username">
                <img src={post.User?.profilePic} alt="" />
                <span>{post.User?.username}</span>
              </div>
              <div className="list-item-desciption">
                <h3>{post.title}</h3>
                <p>{post.subTitle}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
