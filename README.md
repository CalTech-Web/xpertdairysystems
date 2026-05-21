# New Client Website - Orchestration Spec

Follow every step in order. Spawn each agent using the Agent tool with `model="sonnet"`. Do not proceed to the next step until the current agent returns its required success signal. Never skip a step. Never start building before Step 1 is complete.

**Required before starting:**
- `xpertdairysystems` — project folder name, lowercase, no spaces (e.g. `davidsplumbing`)
- `DOMAIN` — client's existing website URL (e.g. `davidsplumbing.com`), or `none` if they don't have one
- `PROJECT_PATH` — `/Users/brandonhopkins/Projects/xpertdairysystems`

---

## Step 1 — Setup Agent

Spawn a **general-purpose** agent (`model="sonnet"`) with this exact prompt (substitute xpertdairysystems and today's date):

> Your only job is to set up the project folder.
>
> 1. Copy the entire directory `/Users/brandonhopkins/Projects/WEBSITETEMPLATE/` to `/Users/brandonhopkins/Projects/xpertdairysystems/`
> 2. Inside the new folder, rename `SITE_FACTS_TEMPLATE.md` to `SITE_FACTS.md`
> 3. In `CLAUDE.md`, replace `[Project Name]` with `xpertdairysystems` and `[YYYY-MM-DD]` with today's date
> 4. In `README.md`, replace every occurrence of `xpertdairysystems` with the actual client name
> 5. Verify the copy succeeded by listing all files in `/Users/brandonhopkins/Projects/xpertdairysystems/`
> 6. Return exactly: `SETUP_COMPLETE`

**Do not proceed to Step 2 until the agent returns `SETUP_COMPLETE`.**

---

## Step 2 — Research Agent

Spawn a **general-purpose** agent (`model="sonnet"`) with this exact prompt (substitute xpertdairysystems and DOMAIN):

> Your only job is to research xpertdairysystems and fully populate their SITE_FACTS.md.
>
> If DOMAIN is not `none`, use Playwright (headless) to visit DOMAIN and follow every internal link. If DOMAIN is `none` or the site returns an error, skip the site visit and rely on other sources.
>
> Also search Google, Facebook, Instagram, Yelp, and LinkedIn for: company name, phone, address, founded year, services, team bios, testimonials, reviews, stats, differentiators, social links, and brand colors.
>
> Download all logos, staff photos, gallery images, and program/product images to `/Users/brandonhopkins/Projects/xpertdairysystems/assets/` organized by subfolder: `logos/`, `team/`, `gallery/`, `products/`. For gallery pages or slideshows, enumerate every individual image URL and download each one. If an image cannot be downloaded, note its URL in SITE_FACTS.md instead.
>
> Fill out every section of `/Users/brandonhopkins/Projects/xpertdairysystems/SITE_FACTS.md`. No placeholder text or bracket fields should remain. If data is genuinely unavailable, write `Unknown` rather than leaving a blank. Do NOT fill in the Technology Stack section - leave all values as their template placeholders so the build agent can complete it.
>
> Return exactly: `RESEARCH_COMPLETE`

**Do not proceed to Step 3 until the agent returns `RESEARCH_COMPLETE`.**

---

## Step 3 — Build Agent

Spawn a **general-purpose** agent (`model="sonnet"`) with this exact prompt (substitute xpertdairysystems):

> Your only job is to build and deploy the website.
>
> 1. Read `/Users/brandonhopkins/Projects/xpertdairysystems/SITE_FACTS.md` for all content and structure.
> 2. Scaffold a Next.js (App Router) + TypeScript + Tailwind CSS site in `/Users/brandonhopkins/Projects/xpertdairysystems/site/`
> 3. Build every page listed in the Site Structure section of SITE_FACTS.md.
> 4. Use all assets from `/Users/brandonhopkins/Projects/xpertdairysystems/assets/`
> 5. Run `npm install` then `npm run build`. Fix all errors before continuing.
> 6. Initialize a git repo at the project root `/Users/brandonhopkins/Projects/xpertdairysystems/` (not inside site/). Add a `.gitignore` that excludes `site/node_modules`. Commit all files.
> 7. Create a GitHub repo named `xpertdairysystems` under the `CalTech-Web` org and push: `gh repo create CalTech-Web/xpertdairysystems --public --source=. --remote=origin --push`
> 8. Deploy from the project root with the root directory set to `site`: `cd /Users/brandonhopkins/Projects/xpertdairysystems && npx vercel --yes --prod --name xpertdairysystems`
> 9. After the first deploy, set the Vercel Root Directory to `site` so that GitHub auto-deploys work correctly. Get the Vercel auth token from `~/Library/Application Support/com.vercel.cli/auth.json`, read the project ID from `.vercel/project.json`, then run: `curl -s -X PATCH "https://api.vercel.com/v9/projects/PROJECT_ID" -H "Authorization: Bearer TOKEN" -H "Content-Type: application/json" -d '{"rootDirectory":"site"}'`
> 10. Trigger one more deploy to confirm the root directory setting works: `cd /Users/brandonhopkins/Projects/xpertdairysystems && npx vercel --yes --prod`
> 11. Return exactly: `BUILD_COMPLETE [vercel-url]`

**Do not proceed to Step 4 until the agent returns `BUILD_COMPLETE` and a Vercel URL.**

---

## Contact Form Setup

After Step 3, register the new client domain in the centralized forms service. See [EMAIL.md](EMAIL.md) for full details.

## Turnstile CAPTCHA Setup

After the contact form is working, add Turnstile to the new site. Tell Claude Code:

> "Create a Turnstile widget for [domain] and enable it on the form"

Claude will create the Cloudflare widget, add the frontend snippet to the site's form, add the backend secret to `sites.ts`, and deploy both.

---

## Step 4 — Autonomous Agents

Run these four bash commands one at a time, in order. Wait for each to finish before running the next. Set a timeout for each task to 60 minutes. Substitute `xpertdairysystems` with the actual folder name.

```
WORK=/Users/brandonhopkins/Projects/xpertdairysystems/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
```
```
WORK=/Users/brandonhopkins/Projects/xpertdairysystems/agents/cro-agent MODEL="sonnet" MAX_LOOPS=3 bash ~/Projects/claude-lab/ENGINE/run.sh
```
```
WORK=/Users/brandonhopkins/Projects/xpertdairysystems/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
```
```
WORK=/Users/brandonhopkins/Projects/xpertdairysystems/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=2 bash ~/Projects/claude-lab/ENGINE/run.sh
```

**Do not proceed to Step 5 until all four agents have exited.**

---

## Step 5 — Visual Audit Agent

Before spawning the agent: read the Site Structure section of `/Users/brandonhopkins/Projects/xpertdairysystems/SITE_FACTS.md` to get the actual page list and URL paths. Substitute xpertdairysystems with the real project name in the file path below.

Spawn a **visual-auditor** agent (`model="sonnet"`) with this prompt (substitute xpertdairysystems and VERCEL_URL, and paste the actual page URL list from SITE_FACTS.md):

> Perform a visual audit of the following pages at VERCEL_URL. For each page, check: layout integrity, spacing, mobile responsiveness, broken images, broken links, text overflow, and anything that looks unfinished or off-brand.
>
> Pages to audit:
> [paste page list from SITE_FACTS.md Site Structure section here]
>
> Save the complete findings to `/tmp/xpertdairysystems-audit.md`. Return when the file is written.

**Do not proceed to Step 6 until `/tmp/xpertdairysystems-audit.md` exists.**

---

## Step 6 — Fix Agent

Read `/tmp/xpertdairysystems-audit.md`. Spawn a **general-purpose** agent (`model="sonnet"`) with this exact prompt (substitute xpertdairysystems and paste the audit contents):

> Your only job is to fix every issue listed below. Make each fix in the codebase at `/Users/brandonhopkins/Projects/xpertdairysystems/site/`. After all fixes are made, commit, push, and deploy:
> `cd /Users/brandonhopkins/Projects/xpertdairysystems && npx vercel --yes --prod`
>
> [paste full contents of /tmp/xpertdairysystems-audit.md here]
>
> Return exactly: `FIXES_COMPLETE`

**Do not proceed to Step 7 until the agent returns `FIXES_COMPLETE`.**

---

## Step 7 — Final Review Agent

Spawn a **general-purpose** agent (`model="sonnet"`) with this exact prompt (substitute xpertdairysystems and VERCEL_URL):

> Your only job is to complete the final review checklist and confirm the site is ready to launch.
>
> Check every item using Playwright (headless) against VERCEL_URL:
> - All pages render without errors
> - Mobile layout correct at 375px, 768px, and 1280px
> - Contact form submits successfully
> - All social media links open the correct profiles
> - sitemap.xml is accessible and returns valid XML
> - No em dashes in the codebase (grep for —)
> - No unfilled placeholder text (grep for `[`, `TODO`, `PLACEHOLDER`, `Lorem`)
> - Analytics tag present in page HTML
> - All images load (no broken src attributes)
> - Footer contains a "Powered by Caltechweb" link pointing to `https://caltechweb.com`
>
> Fix any issues found. Then do a final deploy:
> `cd /Users/brandonhopkins/Projects/xpertdairysystems && npx vercel --yes --prod`
>
> Return exactly: `LAUNCH_READY [final-vercel-url]`

**The workflow is complete when this agent returns `LAUNCH_READY`.**

---

## Files

| File | Purpose |
|---|---|
| `SITE_FACTS_TEMPLATE.md` | Blank template — copied to `SITE_FACTS.md` in Step 1 |
| `SITE_FACTS.md` | Completed site data (created in Step 2) |
| `CLAUDE.md` | Project rules for Claude Code |
| `agents/design-agent/` | Visual improvement agent |
| `agents/cro-agent/` | Headlines, CTAs, microtext, hero contrast, ticker speed, logo legibility |
| `agents/seo-agent/` | SEO optimization agent |
| `agents/pagespeed-agent/` | Performance optimization agent |
| `EMAIL.md` | How contact forms and Resend email work across all clients |
