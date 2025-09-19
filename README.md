# Dota Review (GitHub Pages)

Static web app to review Dota matches by match ID. Paste screenshots directly, add bullet notes per slide, set an overall rating, then export or publish.

## Quick start

- Open with GitHub Pages or any local server
- Enter a match ID (try `sample`) and click Load (URL shows `?match=...`)
- Verify a GitHub token to enable Edit (see Authentication)
- Paste screenshots (Ctrl/⌘+V) or drag-and-drop image files/URLs
- Add notes per slide; navigate with ← → or on-screen arrows
- Export JSON or publish to `data/<matchId>.json`

## Data format

```json
{
  "matchId": "1234567890",
  "rating": 7,
  "slides": [
    { "image": "data:image/png;base64,... or https://...", "notes": ["point a", "point b"] }
  ]
}
```

Place files at `data/<matchId>.json`. Load via `?match=<matchId>` or `#<matchId>`.

## GitHub publish

Use the toolbar panel. Provide owner, repo, branch (default `gh-pages`), and a PAT with `repo` scope. The app PUTs `data/<matchId>.json` via GitHub API.

## Authentication (for optional publish)

Publishing from the app requires a GitHub Personal Access Token (PAT). You can use either a classic token or a fine‑grained token.

Classic token (simple):
- Go to `Settings` → `Developer settings` → `Personal access tokens` → `Tokens (classic)` → `Generate new token`.
- Select scopes:
  - For public repositories: `public_repo`.
  - For private repositories: `repo` (full repo access).
- Set an expiration and a descriptive note, then generate and copy the token.

Fine‑grained token (least privilege):
- Go to `Settings` → `Developer settings` → `Personal access tokens` → `Fine‑grained tokens` → `Generate new token`.
- Repository access: Select only the target repository.
- Permissions: `Repository permissions` → `Contents: Read and write`.
- Set an expiration and create the token.

Use in the app:
- Paste the token into the `token (PAT)` field in the Publish panel along with `owner`, `repo`, and `branch` (e.g., `gh-pages`).
- The token is used client‑side to call `PUT /repos/{owner}/{repo}/contents/data/<matchId>.json` and is not persisted by the app. It is sent only to `api.github.com`.

Security notes:
- Prefer a fine‑grained token restricted to a single repository with `Contents: Read and write`.
- Do not commit the token or share it. Revoke it immediately if exposed.
- For organization repos with SSO, make sure to authorize the token for that org.

Troubleshooting:
- `404` or `Permission denied`: Verify scopes/permissions and that the branch exists.
- `409` conflict: A concurrent update occurred; try again. If updating an existing file, the app auto‑detects the `sha` and includes it in the request.

## Behavior

- Match ID is reflected in the URL (`?match=<id>`) and can be renamed in Edit mode.
- Filmstrip (thumbnails) is fixed at the bottom; content scrolls beneath it.
- Slides can be added, deleted, re‑navigated with arrows/keys.
- Edit mode is gated by verifying a token with push access to the repo/branch.
- Errors (e.g., missing/invalid token) are shown as on‑screen toasts.
- A welcome dialog appears on first visit with sample/new options.

## Local drafts

Autosaved to `localStorage` as `dota-review:<matchId>`.

## Deploy

- Enable GitHub Pages (root or `gh-pages`)
- Keep `.nojekyll` and `404.html` for SPA routing

License: MIT
