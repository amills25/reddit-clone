import { useSession } from "next-auth/react";
import Image from "next/image";
import { Tracing } from "trace_events";

type Props = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: Props) {
  const { data: session } = useSession();

  return (
    <div className={`relative h-10 w-10 rounded-full border-gray-300 bg-white`}>
      <Image
        src={`https://avatars.dicebear.com/api/open-peeps/${
          seed || session?.user?.name || "placeholder"
        }.svg`}
        className="mx-auto"
        alt="avatar"
        height={30}
        width={30}
      />
    </div>
  );
}

export default Avatar;
