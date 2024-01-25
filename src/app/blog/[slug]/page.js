"use client";
import SanityBlockContent from "@sanity/block-content-to-react";
import { HiArrowLongLeft } from "react-icons/hi2";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import { format } from "date-fns";
import { serializers } from "../page";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";

function PostPage() {
  const [singlePost, setSinglePost] = useState([]);
  const { slug } = useParams();

  const router = useRouter();

  useEffect(() => {
    async function getPost() {
      const data = await client.fetch(
        `*[slug.current == "${slug}"] {
          title,
          body[]{
            ...,
            _type == "image" => {
              "_key": _key,
              "_type": _type,
              "imageUrl": asset -> url, // Directly fetch the URL
              "alt": alt
            },
          },
          publishedAt,
          "name": author -> name,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      );
      setSinglePost(...data);
    }
    getPost();
  }, [slug]);

  console.log(singlePost);
  return (
    <>
      <div className="mb-24 bg-slate-400">
        <Hero herobg="" noPattern={true} />
      </div>
      <section className=" max-w-4xl mx-auto px-4 py-24">
        <article className=" text-black mb-12">
          <p className=" font-bold text-center text-5xl mb-8">
            {singlePost.title}
          </p>
          <img src={singlePost.mainImage?.asset.url} className="w-full mb-4" />
          <p className=" mb-10">
            <span>Published by</span>
            <em className="font-semibold text-stone-800">
              {" "}
              &middot; {singlePost.name} &middot;
            </em>
            <span> At</span>
            <em className="text-stone-800">
              {" "}
              {singlePost.publishedAt &&
                format(new Date(singlePost.publishedAt), "LLLL dd yyyy")}
            </em>
          </p>
          <SanityBlockContent
            blocks={singlePost?.body}
            serializers={serializers}
          />
        </article>

        <button
          className=" bg-stone-700 uppercase text-white px-4 py-2 font-semibold rounded-lg flex items-center justify-center gap-2 ml-auto hover:bg-stone-600 transition-all"
          onClick={() => router.back()}
        >
          <HiArrowLongLeft />
          Go back
        </button>
      </section>
    </>
  );
}

export default PostPage;
