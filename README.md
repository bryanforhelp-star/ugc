# bykyndall.com — portfolio site

Static HTML/CSS/JS portfolio for Kyndall Ramirez. No build step, no framework. Edit `index.html`, save, push — Netlify redeploys automatically.

## Files you'll touch

| File | What's in it |
| --- | --- |
| `index.html` | All content: copy, video slots, stats, services. **This is where you edit text.** |
| `styles.css` | Colors, type, spacing, layout. |
| `script.js` | Mobile menu, click-to-play videos. |
| `assets/images/` | Your photos (`hero.jpg`, `about.jpg`, etc). |
| `assets/videos/` | Your MP4 client videos. |
| `assets/posters/` | One still frame per video (shows before you click play). |

## How to preview locally

Just double-click `index.html` — it opens in your browser. That's it. Some browsers block autoplay when opened from the filesystem; if that bothers you, run any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## How to add or swap a video

1. Drop the MP4 into `assets/videos/` with a sensible filename, e.g. `opal.mp4`.
2. Drop a still frame (PNG or JPG, ~800×1420 portrait) into `assets/posters/` with the same base name, e.g. `opal.jpg`. (Take a screenshot of a nice frame from the video.)
3. In `index.html`, find the matching `<video>` and confirm the paths match. For example:
   ```html
   <video playsinline muted loop preload="metadata" poster="assets/posters/opal.jpg">
     <source src="assets/videos/opal.mp4" type="video/mp4" />
   </video>
   ```
4. Commit and push. Netlify redeploys in ~30 seconds.

### Video size tips

- Compress to **H.264 MP4, 720p, ~2–4 Mbps**. Tools: [Handbrake](https://handbrake.fr/) (free) or [ffmpeg](https://ffmpeg.org/).
- Aim for under 10 MB per video for snappy loading. Mobile users will thank you.
- GitHub has a 100 MB per-file limit. Keep videos well under that.
- If you end up with more than ~20 videos, consider hosting them on Cloudflare Stream or Bunny CDN instead of committing to Git.

### Don't have the file? Alternate: YouTube/Vimeo embed

Replace the `<video>` block with an iframe:

```html
<div class="video-frame vertical">
  <iframe src="https://www.youtube.com/embed/YOUR_ID" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>
</div>
```

Upload to YouTube as **Unlisted** so only people with the link (i.e. site visitors) can see it.

## How to edit text

Open `index.html` in any editor (TextEdit, VS Code, Notepad). Every section is clearly labeled with HTML comments like `<!-- HERO -->`, `<!-- PAID ADS -->`. Change the text between tags, save, push.

## How to update analytics numbers

In `index.html`, search for `class="stats"`. Update the `<span class="stat-num">` values. Same for the table rows below it.

## Deploy to Netlify (one-time setup)

1. Go to [netlify.com](https://netlify.com) → **Sign up with GitHub**.
2. **Add new site → Import an existing project → GitHub → `bryanforhelp-star/ugc`**.
3. Leave build command blank, publish directory `.`. Click **Deploy**.
4. Netlify gives you a URL like `https://something-random-123.netlify.app`. Your site is live.

### Point your Namecheap domain at Netlify

1. In Netlify → **Site settings → Domain management → Add a domain**. Enter `bykyndall.com` (or whatever your domain is). Add `www.bykyndall.com` too.
2. Netlify shows you the DNS values it needs. It'll be one of two options — **follow the values Netlify actually shows you**, but the defaults are:

   | Type | Host | Value |
   | --- | --- | --- |
   | A | `@` | `75.2.60.5` |
   | CNAME | `www` | `your-site-name.netlify.app` |

3. In Namecheap → **Domain List → Manage → Advanced DNS**:
   - **Remove** any existing records pointing to Canva.
   - Add the A record: Type `A Record`, Host `@`, Value `75.2.60.5`, TTL Automatic.
   - Add the CNAME: Type `CNAME Record`, Host `www`, Value `your-site-name.netlify.app`, TTL Automatic.
4. Wait 10–30 minutes for DNS to propagate. Netlify will auto-issue a free HTTPS cert.
5. In Netlify → Domain management, click **Verify DNS configuration** and then enable **HTTPS → Force HTTPS**.

### Alternative: Netlify DNS (easier, optional)

You can also delegate DNS entirely to Netlify by pointing Namecheap's nameservers at Netlify's. Netlify will walk you through this if you prefer — skip the A/CNAME step above.

## How to update the site after launch

```bash
# edit files
git add .
git commit -m "update paid ads section"
git push
```

Netlify redeploys within ~30 seconds of the push.

## Troubleshooting

- **Video not playing:** check the file path in `index.html` exactly matches the filename in `assets/videos/` (case-sensitive on Netlify).
- **Layout looks broken:** hard refresh with Cmd/Ctrl + Shift + R to bypass the cache.
- **DNS not resolving:** run `dig bykyndall.com +short` in Terminal — should return `75.2.60.5`. If not, double-check Namecheap's Advanced DNS tab.

---

Built with plain HTML, CSS, and about 40 lines of JavaScript. No platform lock-in — you own this site.
