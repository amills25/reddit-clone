import Image from "next/image";
import { HomeIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import { signIn, useSession, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
          alt="logo"
          className="object-fill"
          width={80}
          height={40}
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search box */}
      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button hidden type="submit" />
      </form>

      <div className="text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign in/sign out button */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src="https://links.papareact.com/23l"
              height={20}
              width={20}
              alt=""
              className="object-fill"
            />
          </div>

          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              src="https://links.papareact.com/23l"
              height={20}
              width={20}
              alt=""
              className="object-fill"
            />
          </div>

          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
