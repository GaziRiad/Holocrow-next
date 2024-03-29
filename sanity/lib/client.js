import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

// // Get a pre-configured url-builder from your sanity client
// const builder = imageUrlBuilder(client);

// // Then we like to make a simple function like this that gives the
// // builder an image and returns the builder for you to specify additional
// // parameters:
// export function urlFor(source) {
//   return builder.image(source);
// }
