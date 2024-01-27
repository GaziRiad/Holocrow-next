import { blockContent } from "./schemas/blockContent";
import { post } from "./schemas/post";
import { author } from "./schemas/author";
import { story } from "./schemas/story";

export const schema = {
  types: [post, author, blockContent, story],
};
