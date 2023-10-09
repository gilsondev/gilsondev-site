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
      <h3 className="text-xl font-semibold">Últimas postagens</h3>
      <div className="flex flex-col gap-3 list-none">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <Hyperlink
        className="mt-10"
        href="https://gilsondev.in"
        text="Ver mais"
        target="_blank"
      />
    </div>
  );
};

export default BlogPosts;
