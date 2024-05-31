import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import { useSelector } from "react-redux";
import { addPosts } from "../store/postSlice.js";
import { useDispatch } from "react-redux";

function AllPosts() {
  // const [posts, setPosts] = useState([]);
  // const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  // useEffect(() => {
  //   appwriteService.getPosts([]).then((posts) => {
  //     if (posts) {
  //       dispatch(addPosts({ posts: posts.documents }));

  //       // setPosts(posts.documents);
  //     }
  //   });
  // }, []);

  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
