import { PostRoot } from "../types";

export const fetchLatestPosts = async (): Promise<PostRoot> => {
  const data = await fetch("https://api.hashnode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
                user(username: "gilsondev") {
                  publication {
                    posts(page: 0) {
                      _id
                      dateAdded
                      title
                      coverImage
                      slug
                    }
                  }
                }
              }
            `,
    }),
  });

  return data.json();
};
