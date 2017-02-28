export interface Post {
  id: number;
  title: string;
  text: string;
  author: string;
  postTimes: number;
  readTimes: number;
  commentTimes: number;
}

export interface PostPage {
  total: number;
  items: Post[];
}
