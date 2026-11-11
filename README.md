# Team Tracker

Assign team leaders, allocate staff to them, and show it live on a phone or a TV.

## Files
- `index.html`  – VIEW-ONLY page. This is the link you share. Add `#display` to the end for the TV/big-screen layout.
- `admin.html`  – EDIT page (password protected). Do not share this link.
- `config.js`   – your repo name and the password hash.
- `data.json`   – the teams and staff (updated automatically when you save in admin).
- `set-password.html` – helper to create a new password.

## One-time setup
1. Create a GitHub repository and upload every file in this folder to the main branch.
2. Repo > Settings > Pages > Deploy from a branch > `main` / root. Your site will be at `https://USERNAME.github.io/REPO/`.
3. Edit `config.js` on GitHub and change `repo` to `USERNAME/REPO`.
4. Create a token: GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens >
   Generate new token. Select ONLY this repository, and under Repository permissions set **Contents: Read and write**.
5. Open `https://USERNAME.github.io/REPO/admin.html`, enter the password, paste the token once (kept only in that browser).

## Links
- Share (view only): `https://USERNAME.github.io/REPO/`
- TV screen: `https://USERNAME.github.io/REPO/#display`
- Edit: `https://USERNAME.github.io/REPO/admin.html`

## Changing the password
Open `set-password.html` (on your site or from the downloaded files), type a new password, copy the `passwordHash` line
into `config.js` (replace the old line) and commit. The password is a screen lock; the real protection is that only
someone with a token for your repo can save changes.

## Notes
- Changes can take 1 to 2 minutes to appear because GitHub Pages republishes after each save.
- A public repo makes `data.json` (names) readable by anyone who finds the repo. Use a private repo if your plan supports Pages for it, or keep names to first names/initials.
