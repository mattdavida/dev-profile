import { PROJECTS } from "@/data/projects";
import { fetchRepoMetaMap } from "@/lib/github";
import ExploreClient from "./client";

export const revalidate = 3600; // ISR — re-fetch GitHub data once per hour

export default async function ExplorePage() {
  let metaMap: Awaited<ReturnType<typeof fetchRepoMetaMap>> = {};

  try {
    metaMap = await fetchRepoMetaMap();
  } catch (err) {
    console.warn("[ExplorePage] GitHub API unavailable, using static fallback:", err);
  }

  // Merge live data into our curated list.
  // url comes from the API (authoritative — no wrong-account bugs).
  // Fallback: construct from the account field if API is unavailable.
  const projects = PROJECTS.map((p) => {
    const live = metaMap[p.name];
    return {
      ...p,
      url: live?.url ?? `https://github.com/${p.account}/${p.name}`,
      stars: live?.stars ?? null,
      updatedAt: live?.updatedAt ?? null,
    };
  });

  return <ExploreClient projects={projects} />;
}
