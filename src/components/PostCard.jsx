import React, { useState } from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config";
function PostCard({ $id, title, featuredImage }) {
  // console.log(featuredImage);

  const [img, setImg] = useState("");
  service.getFilePreview(featuredImage).then((data) => setImg(data.href));
  // console.log(img);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {" "}
          <img src={img} alt="title" className="rounded-xl   " />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
