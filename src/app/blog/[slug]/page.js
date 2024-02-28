import SanityBlockContent from "@sanity/block-content-to-react";

import { client } from "../../../../sanity/lib/client";
import { format } from "date-fns";
import { serializers } from "../page";
import Hero from "@/components/Hero";
import Image from "next/image";
import BackButton from "@/components/BackButton";

async function getPost(slug) {
  const data = await client.fetch(
    `*[slug.current == "${slug}"] {
      title,
      body[]{
        ...,
        // Adjust the serializers for different block types
        _type == "image" => {
          // Include the URL directly in the "asset" field
          "_key": _key,
          "_type": _type,
          "asset": {
            "_id": asset._ref,
            "url": asset->url
          },
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
  return data;
}

async function PostPage({ params }) {
  const { slug } = params;
  const data = await getPost(slug);
  const singlePost = data[0];

  return (
    <>
      <div className="mb-24 bg-slate-400">
        <Hero herobg="" noPattern={true} />
      </div>
      <section className=" max-w-4xl mx-auto px-4 py-24">
        <article className=" text-black mb-12">
          <p className="text-2xl md:text-3xl font-bold text-center lg:text-5xl mb-8">
            {singlePost.title}
          </p>
          <Image
            height={500}
            width={500}
            src={singlePost.mainImage?.asset.url}
            alt={singlePost.mainImage?.alt}
            className="w-full mb-4"
          />
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

        <BackButton />
      </section>
    </>
  );
}

export default PostPage;
