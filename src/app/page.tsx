import AboutMe from "@/components/aboutme";
import BlogPosts from "@/components/blogposts";
import Header from "@/components/header";
import { fetchLatestPosts } from "@/lib/hashnode/client";

export default async function Home() {
  const posts = await fetchLatestPosts();

  return (
    <>
      <Header />
      <main className="py-10 px-5 sm:px-24 lg:px-96 lg:mx-28">
        <AboutMe />
        <BlogPosts posts={posts.data.user.publication.posts} />
      </main>
    </>
  );
}
