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
        width={176}
        height={176}
        priority
        className="h-44 w-44 rounded-full border-2 border-foreground object-cover lg:h-52 lg:w-52"
      />
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-2 max-w-xs text-sm text-foreground/70">{bio}</p>
    </div>
  );
}
