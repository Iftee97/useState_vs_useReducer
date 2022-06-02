import React, { useState, useEffect } from "react";

const GetPosts = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsPending(false);
        setPosts(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div>
      <h1>Fetching data and updating state using useState() hook</h1>

      {!isPending &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}

      {error && <p>{error}</p>}
    </div>
  );
};

export default GetPosts;
