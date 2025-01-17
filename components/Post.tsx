import {
  ArrowUpIcon,
  ArrowDownIcon,
  ChatBubbleLeftEllipsisIcon,
  GiftIcon,
  ShareIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./Avatar";
import TimeAgo from "react-timeago";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  return (
    <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      {/* votes */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="voteButtons hover:text-red-400" />
        <p className="text-black font-bold text-xs">0</p>
        <ArrowDownIcon className="voteButtons hover:text-blue-400" />
      </div>

      <div className="p-3 pb-1">
        {/* header */}
        <div className="flex items-center space-x-2">
          <Avatar seed={post.subreddit?.topic} />
          <p className="text-xs text-gray-400">
            <span className="font-bold text-black hover:underline hover:text-blue-400">
              r/{post?.subreddit?.topic}
            </span>{" "}
            • Posted by u/
            {post.username} <TimeAgo date={post.created_at} />
          </p>
        </div>

        {/* body */}
        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-light">{post.body}</p>
        </div>

        {/* image */}
        <img src={post.image} alt="" className="w-full" />

        {/* footer */}
        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
            <p>{post.comments?.length} Comments</p>
          </div>
          <div className="postButtons">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Share</p>
          </div>
          <div className="postButtons">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Save</p>
          </div>
          <div className="postButtons">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
