import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-posts";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const morePosts = allPosts.slice(1);

  return (
    <main className="max-w-screen-xl mx-auto">
      <Container>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
