"use client";

import BlogSlider from "@/components/BlogSlider";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../../sanity/lib/client";
import { format } from "date-fns";
import MainPost from "@/components/blog/MainPost";
import SecondaryPosts from "@/components/blog/SecondaryPosts";
import Image from "next/image";

export const serializers = {
  types: {
    // Common block types
    block: ({ node, children }) => {
      switch (node.style) {
        case "h1":
          return (
            <h1 className="text-3xl font-bold text-black-800 mb-4">
              {children}
            </h1>
          );
        case "h2":
          return (
            <h2 className="text-2xl font-bold text-black-800 mb-3">
              {children}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-xl font-bold text-black-800 mb-2">
              {children}
            </h3>
          );
        case "blockquote":
          return (
            <blockquote className="border-l-4 pl-4 border-gray-400 italic">
              {children}
            </blockquote>
          );

        default:
          return <p className="text-gray-800 mb-4">{children}</p>;
      }
    },

    image: ({ node }) => {
      return <img src={node.asset.url} className=" mb-4" alt={node.alt} />;
    },
    // Add serializers for other custom types as needed
  },
  marks: {
    // Common mark types
    link: ({ mark, children }) => (
      <a
        href={mark.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    // Add serializers for other mark types as needed
  },
};

function About() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const data = await client.fetch(
        `*[_type == "post"] {title, slug, body, publishedAt, mainImage {asset -> {_id, url}, alt,}, "name": author -> name, } | order(publishedAt asc)`
      );

      setPosts(data);
    }
    getPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <div className="mb-20 bg-slate-400">
        <Hero herobg="" noPattern={true} />
      </div>

      {posts[0] && <MainPost post={posts[0]} />}

      <SecondaryPosts posts={posts.slice(1, 3)} />

      <section className="container mx-auto flex items-center justify-center mb-12 px-4 xl:px-16">
        <BlogSlider posts={posts} />
      </section>

      <MainFooter />
    </>
  );
}
export default About;
