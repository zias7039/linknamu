import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  avatar: string;
};

export default function ProfileHeader({ name, bio, avatar }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        priority
        className="h-32 w-32 rounded-full border-4 border-white/90 object-cover shadow-avatar lg:h-40 lg:w-40 lg:border-[5px]"
      />
      <h1 className="mt-5 text-2xl font-bold tracking-tight lg:mt-6 lg:text-[28px]">
        {name}
      </h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed tracking-tight text-muted lg:text-[15px]">
        {bio}
      </p>
    </div>
  );
}
