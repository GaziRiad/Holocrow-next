import { serializers } from "@/app/blog/page";
import SanityBlockContent from "@sanity/block-content-to-react";
import { format } from "date-fns";

function MainPost({ post }) {
  console.log(post);
  return (
    <section className="mt-72 container mx-auto mb-12 px-4 flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-24 lg:px-16 2xl:px-56 lg:mb-40 relative">
      <img
        src={post.mainImage.asset?.url}
        alt={post.mainImage.alt}
        className="rounded-xl w-3/4 h-96 lg:w-[35%] xl:w-[45%]"
      />
      <div className="flex flex-col text-black-800 lg:w-1/2">
        <p className=" font-bold text-3xl mb-2 capitalize">
          {`${post.title.substring(0, 35)}...`}
        </p>
        <p className=" mb-4 text-stone-600">
          <em>
            By {post.name} -{" "}
            {format(new Date(post.publishedAt), "LLLL dd yyyy")}
          </em>
        </p>
        <div className=" text-black-800">
          <SanityBlockContent blocks={post?.body} serializers={serializers} />
        </div>
      </div>
    </section>
  );
}

export default MainPost;
