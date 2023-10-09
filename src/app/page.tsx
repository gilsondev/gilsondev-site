import AboutMe from "@/components/aboutme";
import BlogPosts from "@/components/blogposts";
import Header from "@/components/header";
import { fetchLatestPosts } from "@/lib/hashnode/client";

export default async function Home() {
  const posts = await fetchLatestPosts();

  return (
    <div className="px-6 md:px-6 pt-1 pb-24 md:pt-10 md:pb-44 max-w-[800px] mx-auto">
      <Header />
      <main className="flex flex-col gap-4">
        <AboutMe />
        <BlogPosts posts={posts.data.user.publication.posts} />
      </main>
    </div>
  );
}
