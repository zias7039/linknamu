import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[440px] flex-1 flex-col px-6 pb-10 pt-[88px] lg:pb-16 lg:pt-28">
      <ProfileHeader {...profile} />
      <ul className="mt-10 flex flex-col gap-3.5 lg:mt-12 lg:gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
