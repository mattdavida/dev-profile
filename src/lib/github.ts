const ACCOUNTS = ["mattdavida", "matthew-arvidson"] as const;

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  private: boolean;
  fork: boolean;
  topics: string[];
}

export interface RepoMeta {
  stars: number;
  forks: number;
  updatedAt: string;
  description: string | null;
}

/** Map of repo name → live GitHub metadata. Fetched server-side, cached 1 hour. */
export type RepoMetaMap = Record<string, RepoMeta>;

export async function fetchRepoMetaMap(): Promise<RepoMetaMap> {
  const fetches = ACCOUNTS.map((user) =>
    fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    ).then((r) => {
      if (!r.ok) throw new Error(`GitHub API ${r.status} for ${user}`);
      return r.json() as Promise<GitHubRepo[]>;
    })
  );

  const results = await Promise.allSettled(fetches);
  const map: RepoMetaMap = {};

  for (const result of results) {
    if (result.status === "rejected") {
      console.warn("[github] fetch failed:", result.reason);
      continue;
    }
    if (!Array.isArray(result.value)) continue;

    for (const repo of result.value) {
      // Skip private repos and forks we don't want to surface
      if (repo.private) continue;
      map[repo.name] = {
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
        description: repo.description,
      };
    }
  }

  return map;
}

/** Format an ISO timestamp into a human-readable relative string. */
export function formatUpdated(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const days = Math.floor(
    (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}
