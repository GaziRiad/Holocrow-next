import Link from "next/link";
import { FiLink } from "react-icons/fi";

function SecondaryPosts({ posts }) {
  return (
    <section className="container mx-auto flex items-center justify-between flex-col gap-12 mb-12 px-4 lg:flex-row xl:gap-36 lg:px-16 2xl:px-72 lg:mb-56">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.slug.current}`}
          key={post.title}
          className="group w-full lg:w-1/2 relative"
        >
          <div className="hidden group-hover:block absolute z-10 top-0 left-0 bg-slate-900/60  w-full h-full rounded-xl" />
          <FiLink
            className="hidden group-hover:block absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            size={42}
            color="#fff"
          />
          <div className="relative rounded-2xl overflow-hidden">
            <img
              className="w-full h-[280px] lg:h-[360px] object-fill"
              src={post.mainImage.asset?.url}
              alt={post.mainImage.alt}
            />

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, #D9D9D900, #FBFBFBE4, #FFFFFF)",
              }}
            />
            <div className=" absolute bottom-0 px-8 pb-6">
              <p className="text-sm text-primary font-semibold uppercase -mb-0.5">
                Blog Post
              </p>
              <p className="w-full font-bold text-xl text-black-800 mb-3 text-left capitalize">
                {post.title}
              </p>
              <p className="text-base text-black-800 text-left">
                {post?.body[0].children[0].text.substring(0, 200) + "..."}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default SecondaryPosts;
