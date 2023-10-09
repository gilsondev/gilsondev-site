export interface PostRoot {
  data: PostData;
}

export interface PostData {
  user: PostUser;
}

export interface PostUser {
  publication: Publication;
}

export interface Publication {
  posts: Post[];
}

export interface Post {
  _id: string;
  dateAdded: string;
  title: string;
  coverImage: string;
  slug: string;
}
