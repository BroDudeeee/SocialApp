import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Post = ({ userImg, username, timestamp, caption, img }) => {
  return (
    <div className="flex flex-col space-y-4 mb-14 border p-4 bg-white">
      <div className="flex items-center">
        <Image
          width={40}
          height={40}
          alt="Me"
          src={userImg}
          className="rounded-full"
        />
        <h4 className="font-semibold">{username}</h4>
        <p className="text-gray-400 text-sm">{timestamp}</p>
      </div>
      <div>
        <p className="mb-2">{caption}</p>
        <Image
          width={700}
          height={500}
          alt="MainImg"
          src={img}
          className="rounded-lg"
        />
      </div>
      <div className="flex items-center justify-evenly">
        <HeartIcon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <ShareIcon className="icon" />
        <TrashIcon className="icon" />
      </div>
    </div>
  );
};

export default Post;
