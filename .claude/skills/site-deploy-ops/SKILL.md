---
name: site-deploy-ops
description: Deploy raed-website to Vercel, manage raedalbloushy.com DNS at Cloudflare via the cf CLI, refresh the resume PDF from its source .docx, and understand the live Play Store install badge. Use when deploying this site, changing its domain/DNS, updating the resume, or touching Play Store install counts.
---

# Site deploy & ops

Reusable steps for operating raed-website's infrastructure from the CLI, so
future work doesn't have to rediscover these from scratch.

## Deploy to Vercel

Always `cd` into `raed-website` first — running `vercel` from the parent
`GitHub` folder deploys the wrong directory (it'll say "No framework
detected").

```bash
cd raed-website
npx vercel login          # OAuth device flow, opens a browser link
npx vercel --prod --yes   # deploy to production
```

Deploying to production makes the site publicly live — confirm with the user
before running `--prod` unless they've already asked for it in this
conversation.

## Custom domain + DNS (Cloudflare)

1. Add the domain to the Vercel project — this prints the exact DNS record
   Vercel wants:
   ```bash
   npx vercel domains add raedalbloushy.com
   ```
   It recommends an apex `A` record to `76.76.21.21` (Vercel's anycast IP).
   Use that over switching nameservers — it's non-destructive to any other
   DNS already on the zone.

2. Manage the actual DNS record with Cloudflare's `cf` CLI (not `wrangler` —
   `cf` is the new unified Cloudflare CLI, covers DNS/zones/everything).
   **Requires Node >= 22.** If the shell's default Node is older:
   ```bash
   export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 22
   npm i -g cf@1.0.0-beta.5   # pin the version that's been verified to work
   cf auth login              # OAuth device flow
   cf auth whoami             # verify
   ```

3. `cf` enforces command discovery via search rather than nested `--help`:
   ```bash
   cf cli search "create a DNS record in a zone"
   ```
   Keep search queries generic (task + resource type only) — no domains,
   emails, account/zone IDs, or tokens in the query text itself.

4. Get the zone ID, then create the record — **always `--dry-run` first**:
   ```bash
   cf zones list   # find the zone id for the domain
   cf dns records create -z <zone_id> --dry-run --body '{"type":"A","name":"raedalbloushy.com","content":"76.76.21.21","ttl":1,"proxied":false}'
   cf dns records create -z <zone_id> --body '{"type":"A","name":"raedalbloushy.com","content":"76.76.21.21","ttl":1,"proxied":false}'
   ```
   `proxied:false` is deliberate — the origin is Vercel, not Cloudflare, so
   proxying (orange cloud) would break Vercel's own SSL/edge routing.

5. Verify: `dig +short raedalbloushy.com A` should return `76.76.21.21`, and
   `curl -sI https://raedalbloushy.com` should return `server: Vercel`.

## Refresh the resume PDF

The source of truth is a `.docx` on the user's machine (not in this repo).
Convert it with Word via AppleScript rather than guessing at a Node-based
docx→pdf converter — Word preserves the original formatting exactly:

```bash
osascript <<'EOF'
tell application "Microsoft Word"
    activate
    open POSIX file "/path/to/resume.docx"
    set docRef to active document
    save as docRef file name "/path/to/output.pdf" file format format PDF
    close docRef saving no
end tell
EOF
```

Then move the result to `public/resume.pdf` and read it back (Read tool
supports PDF) to confirm the content before assuming it worked.

## Play Store install badge

`AyaBelQuran`'s install count on the Projects section is fetched live, not
hardcoded — see `src/lib/playstore.ts`. There's no official free Google API
for arbitrary apps' install counts, so it uses `google-play-scraper` (a
maintained, widely-used library — 150k+ weekly downloads) instead of
hand-rolled HTML parsing. It's called from `src/app/page.tsx` (a Server
Component) with `export const revalidate = 86400` so it only re-fetches once
a day via Next.js ISR, not on every page view. It fails gracefully (falls
back to no number, just "On Google Play") if Play Store's markup changes and
breaks the scraper — check `getPlayStoreInstalls` if the badge ever goes
blank.
