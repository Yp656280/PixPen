import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container } from "../components/index.js";
import { PostCard } from "../components/index.js";
import { useSelector } from "react-redux";
import { addPosts } from "../store/postSlice.js";
import { useDispatch } from "react-redux";

function Home() {
  const status = useSelector((state) => state.auth.status);
  const post = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        dispatch(addPosts({ posts: posts.documents }));
        // setPosts(posts.documents);
      }
    });
  }, []);
  if (!status) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No Post's Available, Please Login
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap">
          {post?.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
