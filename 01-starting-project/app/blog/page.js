import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Post</h1>
      <Link href="/blog/post-1">Post 1</Link>
      <br />
      <Link href="/blog/post-2">Post 2</Link>
    </main>
  );
}
