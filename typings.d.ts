// type DateTime = string; // You can define the DateTime type as per your needs

type Comments = {
  created_at: string;
  id: number;
  post_id: numberl;
  text: string;
  username: string;
};

// type Comment = {
//   created_at: DateTime;
//   id: ID;
//   post: Post | null;
//   post_id: ID | null;
//   text: string | null;
//   username: string | null;
// };

type Post = {
  body: string;
  created_at: string;
  id: number;
  image: string;
  subreddit_id: number;
  title: string;
  username: string;
  votes: Vote[];
  comments: Comments[];
  subreddit: Subreddit;
};

// type Post = {
//   body: string | null;
//   comment: Comment[] | null;
//   created_at: DateTime;
//   id: ID;
//   image: string | null;
//   subreddit: Subreddit | null;
//   subreddit_id: ID | null;
//   title: string | null;
//   username: string | null;
//   vote: Vote[] | null;
// };

type Subreddit = {
  created_at: string;
  id: number;
  topic: string;
};

// type Subreddit = {
//   created_at: DateTime;
//   id: ID;
//   post: Post[] | null;
//   topic: string | null;
// };

type Vote = {
  created_at: string;
  id: number;
  post_id: number;
  upvote: boolean;
  username: string;
};

// type Vote = {
//   created_at: DateTime;
//   id: ID;
//   post: Post | null;
//   post_id: ID | null;
//   upvote: boolean | null;
//   username: string | null;
// };

type Query = {
  comment: Comment | null;
  commentList: Comment[] | null;
  commentPaginatedList: Comment[] | null;
  commentUsingComment_post_id_fkey: Comment[] | null;
  post: Post | null;
  postList: Post[] | null;
  postPaginatedList: Post[] | null;
  postUsingComment_post_id_fkey: Post | null;
  postUsingPost_subreddit_id_fkey: Post[] | null;
  postUsingVote_post_id_fkey: Post | null;
  subreddit: Subreddit | null;
  subredditList: Subreddit[] | null;
  subredditPaginatedList: Subreddit[] | null;
  subredditUsingPost_subreddit_id_fkey: Subreddit | null;
  vote: Vote | null;
  voteList: Vote[] | null;
  votePaginatedList: Vote[] | null;
  voteUsingVote_post_id_fkey: Vote[] | null;
};

type Mutation = {
  deleteComment: Comment | null;
  insertComment: Comment | null;
  updateComment: Comment | null;
  deletePost: Post | null;
  insertPost: Post | null;
  updatePost: Post | null;
  deleteSubreddit: Subreddit | null;
  insertSubreddit: Subreddit | null;
  updateSubreddit: Subreddit | null;
  deleteVote: Vote | null;
  insertVote: Vote | null;
  updateVote: Vote | null;
};
