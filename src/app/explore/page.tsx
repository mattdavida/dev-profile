import { PROJECTS } from "@/data/projects";
import { fetchRepoMetaMap } from "@/lib/github";
import ExploreClient from "./client";

export const revalidate = 3600; // ISR — re-fetch GitHub data once per hour

export default async function ExplorePage() {
  let metaMap: Awaited<ReturnType<typeof fetchRepoMetaMap>> = {};

  try {
    metaMap = await fetchRepoMetaMap();
  } catch (err) {
    // Network failure or rate-limit: gracefully fall back to static star counts
    console.warn("[ExplorePage] GitHub API unavailable, using static data:", err);
  }

  // Merge live stars + updatedAt into our curated project list
  const projects = PROJECTS.map((p) => {
    const live = metaMap[p.name];
    return {
      ...p,
      stars: live?.stars ?? p.stars ?? null,
      updatedAt: live?.updatedAt ?? null,
    };
  });

  return <ExploreClient projects={projects} />;
}
