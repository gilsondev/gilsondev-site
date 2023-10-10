import AboutMe from "@/components/aboutme";
import BlogPosts from "@/components/blogposts";
import Experience from "@/components/experience";
import Header from "@/components/header";
import TechStacks from "@/components/techstacks";

export default function Home() {
  return (
    <div className="px-6 md:px-6 pt-1 pb-24 md:pt-10 md:pb-44 max-w-[800px] mx-auto">
      <Header />
      <main className="flex flex-col gap-4">
        <AboutMe />
        <TechStacks />
        <Experience />
        <BlogPosts />
      </main>
    </div>
  );
}
