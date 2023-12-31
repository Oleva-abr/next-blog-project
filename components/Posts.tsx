"use client";

import { getAllPosts } from "@/servises/getPosts";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
