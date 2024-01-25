export const story = {
  name: "story",
  title: "Story",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      media: "mainImage",
    },
  },
};
