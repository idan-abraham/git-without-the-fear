import type { APIRoute } from 'astro';

export const prerender = false;

// A GET landing page (plain link/button navigations work; top-level POST form
// navigations are blocked by the Wix runtime). On load it calls Wix's OWN
// logout endpoint via fetch — which IS allowed and clears the session state
// correctly — then shows a signed-out confirmation. We do NOT hand-clear the
// cookie ourselves; doing so left Wix's session inconsistent and broke re-login.
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Signing out…</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@600;700;800&family=Wix+Madefor+Text:wght@400;600&display=swap" rel="stylesheet">
<style>
:root{--accent:#116DFF}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#070A10;color:#E6EDF3;
  font-family:'Wix Madefor Text',system-ui,sans-serif;padding:24px;overflow:hidden}
.glow{position:fixed;border-radius:50%;filter:blur(90px);opacity:.4;pointer-events:none}
.g1{width:560px;height:560px;background:var(--accent);top:-200px;left:-120px}
.g2{width:460px;height:460px;background:#7C3AED;bottom:-200px;right:-100px}
.card{position:relative;z-index:1;max-width:440px;text-align:center;background:#0E141F;border:1px solid #2A3A52;
  border-radius:20px;padding:40px 34px;box-shadow:0 40px 100px rgba(0,0,0,.6)}
h1{font-family:'Wix Madefor Display',sans-serif;font-size:26px;margin:0 0 12px}
p{color:#9FB0C3;line-height:1.55;margin:0;font-size:15px}
a.btn{display:inline-block;margin-top:22px;text-decoration:none;font-family:'Wix Madefor Display',sans-serif;
  font-weight:700;font-size:14px;background:var(--accent);color:#fff;border-radius:11px;padding:13px 24px;
  box-shadow:0 12px 30px rgba(17,109,255,.35);transition:transform .15s}
a.btn:hover{transform:translateY(-2px)}
.emoji{font-size:40px;margin-bottom:10px}
.tip{margin-top:16px;font-size:12.5px;color:#5B6B80;line-height:1.5}
.hide{display:none}
.spin{display:inline-block;width:26px;height:26px;border:3px solid #2A3A52;border-top-color:var(--accent);
  border-radius:50%;animation:s 1s linear infinite;margin-bottom:6px}
@keyframes s{to{transform:rotate(360deg)}}
</style></head>
<body>
<div class="glow g1"></div><div class="glow g2"></div>
<div class="card">
  <div id="busy"><div class="spin"></div><h1>Signing you out…</h1><p>One moment.</p></div>
  <div id="done" class="hide">
    <div class="emoji">👋</div>
    <h1>You're signed out</h1>
    <p>Come back any time. The quest will be here.</p>
    <a class="btn" href="/api/auth/login?returnToUrl=/">Sign in again →</a>
    <p class="tip">Switching accounts? Open an <b>incognito window</b> or change your Google account, then sign in with <b>@wix.com</b>.</p>
  </div>
</div>
<script>
  (async function () {
    try { await fetch('/api/auth/logout?returnToUrl=/', { method: 'POST', credentials: 'include' }); } catch (e) {}
    document.getElementById('busy').classList.add('hide');
    document.getElementById('done').classList.remove('hide');
  })();
</script>
</body></html>`;

export const GET: APIRoute = async () =>
  new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
