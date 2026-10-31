import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[440px] flex-1 flex-col px-6 pb-10 pt-[88px] lg:pb-16 lg:pt-28">
      <ProfileHeader {...profile} />
      <LinkList links={links} />
    </main>
  );
}
