import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <>
      <Link
        href={`https://gilsondev.in/${post.slug}`}
        target="_blank"
        key={post._id}
        className="py-5"
      >
        <span className="text-xs font-bold text-gray-400">
          {new Date(post.dateAdded).toLocaleDateString("pt-BR")}
        </span>
        <div className="flex justify-between items-center gap-3">
          <span className="text-gray-800 font-bold text-sm lg:text-base hover:text-gray-500">
            {post.title}
          </span>
          <Image
            src={post.coverImage}
            alt={post.title}
            width={96}
            height={96}
            className="lg:hidden"
          />
        </div>
      </Link>
    </>
  );
};

export default PostCard;
