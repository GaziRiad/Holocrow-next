import { serializers } from "@/app/blog/page";
import SanityBlockContent from "@sanity/block-content-to-react";
import { format } from "date-fns";

// const myPortableTextComponents = {
//   types: {
//     image: ({ value }) => <img src={value.imageUrl} />,
//     callToAction: ({ value, isInline }) =>
//       isInline ? (
//         <a href={value.url}>{value.text}</a>
//       ) : (
//         <div className="callToAction">{value.text}</div>
//       ),
//   },

//   marks: {
//     link: ({ children, value }) => {
//       const rel = !value.href.startsWith("/")
//         ? "noreferrer noopener"
//         : undefined;
//       return (
//         <a
//           href={value.href}
//           rel={rel}
//           className=" text-blue-500"
//           target="_blank"
//         >
//           {children}
//         </a>
//       );
//     },
//   },
//   block: {
//     // Ex. 1: customizing common block types
//     h1: ({ children }) => (
//       <h1 className="text-3xl text-center font-bold text-black-800 mb-4">
//         {children}
//       </h1>
//     ),

//     // Ex. 2: rendering custom styles
//     h2: ({ children }) => (
//       <h2 className="text-3xl text-black-800 mb-2 font-bold ">{children}</h2>
//     ),

//     em: ({ children }) => (
//       <em className="text-gray-600 font-semibold">{children}</em>
//     ),

//     p: ({ children }) => <p className="!mb-4">{children}</p>,
//   },
// };

function MainPost({ post }) {
  console.log(post);
  return (
    <section className="mt-72 container mx-auto mb-12 px-4 flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-24 xl:gap-32 lg:px-16 2xl:px-56 lg:mb-40 relative">
      <img
        src={post.mainImage.asset?.url}
        alt={post.mainImage.alt}
        className="rounded-xl w-3/4 h-96 lg:w-[35%] xl:w-[30%]"
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
          {/* <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          /> */}
          <SanityBlockContent blocks={post?.body} serializers={serializers} />
        </div>
      </div>
    </section>
  );
}

export default MainPost;
