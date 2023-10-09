import React from "react";
import Hyperlink from "../hyperlink";
import { Post } from "@/lib/types";
import PostCard from "../postcard";

interface BlogPostsProps {
  posts: Post[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold dark:text-gray-200">
        Últimas postagens
      </h3>
      <div className="flex flex-col gap-3 list-none">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <Hyperlink
        className="mt-3 text-base dark:text-gray-200"
        href="https://blog.gilsondev.in"
        label="Ver mais"
        target="_blank"
      />
    </div>
  );
};

export default BlogPosts;
