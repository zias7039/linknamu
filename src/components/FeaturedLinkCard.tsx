import Image from "next/image";
import type { LinkItem } from "@/data/profile";

export default function FeaturedLinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/go/${link.id}`}
      className="block overflow-hidden rounded-xl border-2 border-foreground"
    >
      {link.thumbnail && (
        <Image
          src={link.thumbnail}
          alt=""
          width={640}
          height={320}
          className="aspect-[2/1] w-full object-cover"
        />
      )}
      <span className="flex items-center justify-between bg-foreground px-5 py-4 text-base font-semibold text-background">
        <span>{link.title}</span>
        <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}
