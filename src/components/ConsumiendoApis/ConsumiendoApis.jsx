import { useEffect, useState } from "react";

const ConsumiendoApis = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: "esta es una prueba de front",
        userId: 2,
        body: "aca estamos probando el verbo post",
      }),
    });
    createPost.then((res) => console.log(res));
  }, []);
  console.log(post);

  return <div>ConsumiendoApis</div>;
};

export default ConsumiendoApis;
