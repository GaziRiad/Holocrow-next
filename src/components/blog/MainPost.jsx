import { serializers } from "@/app/blog/page";
import SanityBlockContent from "@sanity/block-content-to-react";
import { format } from "date-fns";
import Button from "../Button";

function MainPost({ post }) {
  function printText(body) {
    let fullBodyText = "";
    body.map(
      (el) => (fullBodyText = fullBodyText + `${el.children[0].text}@@`)
    );
    fullBodyText = fullBodyText.split(" ").slice(0, 180).join(" ").split("@@");
    return fullBodyText;
  }
  return (
    <section className="mt-72 container mx-auto mb-12 px-4 flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-24 lg:px-16 2xl:px-56 lg:mb-40 relative">
      <div className="relative w-full lg:absolute lg:-top-4 xl:right-[10%] lg:w-1/2">
        <img src="/assets/Vector-wave.png" className="top-0 w-36 -z-50" />
        <p className="text-primary font-bold text-5xl md:text-5xl absolute z-10 -mt-28 pl-8 xl:-mt-24 xl:pl-[28px]">
          <span className="text-white">{"News".slice(0, 3)}</span>
          <span>{"News".slice(-1)}</span>
        </p>
      </div>
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
          {/* <SanityBlockContent blocks={post?.body} serializers={serializers} /> */}
          {printText(post?.body).map((el, i) => (
            <p key={el} className={`mb-3`}>
              {`${el} ${i === printText(post?.body).length - 1 ? " ..." : ""}`}
            </p>
          ))}
        </div>
        <div className=" ml-auto mt-4">
          <Button
            type="small"
            to={`/blog/${post.slug.current}`}
            style={
              "!bg-primary !text-white hover:!bg-primary/80 !transition-all"
            }
          >
            Read more
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MainPost;
