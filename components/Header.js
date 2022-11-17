import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  const addPost = () => {
    if (!session) {
      signIn();
    }
  };
  return (
    <header className="p-3 bg-white shadow-md hover:shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-around">
        <button className="font-mono text-xl cursor-pointer">SocialApp</button>
        <div className="flex items-center">
          <HomeIcon className="icon" />
          <PlusCircleIcon className="icon" onClick={addPost} />
          {session && (
            <div onClick={() => signOut()}>
              <Image
                width={40}
                height={40}
                alt="Me"
                src={session.user.image}
                className="icon"
              />
            </div>
          )}
          {!session && (
            <button
              className="hover:bg-gray-100 rounded-md py-0.5 px-1 text-lg"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
