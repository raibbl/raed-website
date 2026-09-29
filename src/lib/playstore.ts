import gplay from "google-play-scraper";

export async function getPlayStoreInstalls(appId: string): Promise<string | null> {
  try {
    const app = await gplay.app({ appId });
    return app.installs ?? null;
  } catch {
    return null;
  }
}
