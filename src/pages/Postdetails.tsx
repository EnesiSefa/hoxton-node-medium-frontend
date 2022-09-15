import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import {  Post, User } from "../types";


export default function PostDetails() {
  const [posts, setPosts] = useState<Post[]>([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${params.id}`)
      .then((Response) => Response.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);
  

  if (posts === null)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  if (posts === undefined) return <Navigate to={"/homepage"} />;
  return (
  <div className="post-details">
    <div className="upper-post-details">
        <img src="" alt="" />
        <span></span>
    </div>
    <div className="lower-post-details">
        <h1></h1>
        <h2></h2>
        <img src="" alt="" />
        <p></p>

    </div>
    <div className="intercation"></div>

  </div>
  )
}

