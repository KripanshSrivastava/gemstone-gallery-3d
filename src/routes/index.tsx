import { createFileRoute } from "@tanstack/react-router";
import { StorePage } from "../components/gem-store/StorePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rashmi Gems — Fine Gemstones" },
      {
        name: "description",
        content:
          "Emeralds, rubies, blue sapphires and rare coloured gemstones — hand-selected at the source and cut for light by Rashmi Gems.",
      },
      { property: "og:title", content: "Rashmi Gems — Fine Gemstones" },
      {
        property: "og:description",
        content:
          "Rare coloured stones, trusted since generations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StorePage,
});
