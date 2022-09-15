export type User = {
  id: number;
  username: string;
  profilePic: string;
  //   post?: Post;
};
export type Post = {
  id: number;
  username: string;
  title: string;
  subTitle: string;
  imageUrl: string;
  description: string;
  Liked: boolean;
  comments: Comment[];
  User?: User;
};

export type Comment = {
  id: number;
  content: string;
  Liked: boolean;
  post?: Post;
};


