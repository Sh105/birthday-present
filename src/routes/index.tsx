import { createFileRoute } from "@tanstack/react-router";
import { BirthdayStory } from "@/components/birthday/BirthdayStory";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Player 2 — A Birthday Story" },
      { name: "description", content: "A one-of-a-kind romantic birthday story game, made with love." },
      { property: "og:title", content: "Player 2 — A Birthday Story" },
      { property: "og:description", content: "A small birthday adventure made for one very special player." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <BirthdayStory />;
}
