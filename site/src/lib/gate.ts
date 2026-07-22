import { members } from '@wix/members';

export type Access =
  | { status: 'anon' }
  | { status: 'denied'; email: string }
  | { status: 'ok'; email: string };

// The @wix/astro pre-middleware establishes ambient member auth from the
// `wixSession` cookie, so members.getCurrentMember() resolves the current
// member here without us building a client. Anonymous is a normal state, so a
// thrown error is treated as "logged out" (an unguarded throw truncates SSR).
export async function checkAccess(): Promise<Access> {
  let email: string | undefined;
  try {
    const { member } = await members.getCurrentMember({ fieldsets: ['FULL'] });
    email = member?.loginEmail?.toLowerCase();
  } catch {
    /* anonymous / members not resolvable → treat as logged out */
  }
  if (!email) return { status: 'anon' };
  if (!email.endsWith('@wix.com')) return { status: 'denied', email };
  return { status: 'ok', email };
}

// Signed in, but not a @wix.com account → styled 403 with a "switch account" action.
export function deniedPage(email: string): Response {
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Wix employees only</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@600;700;800&family=Wix+Madefor+Text:wght@400;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
:root{--accent:#116DFF}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#070A10;color:#E6EDF3;
  font-family:'Wix Madefor Text',system-ui,sans-serif;padding:24px;overflow:hidden}
.glow{position:fixed;border-radius:50%;filter:blur(90px);opacity:.4;pointer-events:none}
.g1{width:560px;height:560px;background:var(--accent);top:-200px;left:-120px}
.g2{width:460px;height:460px;background:#7C3AED;bottom:-200px;right:-100px}
.card{position:relative;z-index:1;max-width:460px;text-align:center;background:#0E141F;border:1px solid #2A3A52;
  border-radius:20px;padding:40px 34px;box-shadow:0 40px 100px rgba(0,0,0,.6)}
h1{font-family:'Wix Madefor Display',sans-serif;font-size:26px;margin:0 0 12px}
p{color:#9FB0C3;line-height:1.55;margin:0 0 8px;font-size:15px}
.email{font-family:'JetBrains Mono',monospace;color:#FF9B9B;background:rgba(255,107,107,.1);
  border:1px solid rgba(255,107,107,.3);border-radius:8px;padding:2px 8px;font-size:13px}
button{margin-top:22px;font-family:'Wix Madefor Display',sans-serif;font-weight:700;font-size:14px;
  background:var(--accent);color:#fff;border:none;border-radius:11px;padding:13px 24px;cursor:pointer;
  box-shadow:0 12px 30px rgba(17,109,255,.35);transition:transform .15s}
button:hover{transform:translateY(-2px)}
.emoji{font-size:40px;margin-bottom:10px}
</style></head>
<body>
<div class="glow g1"></div><div class="glow g2"></div>
<div class="card">
  <div class="emoji">🔒</div>
  <h1>Wix employees only</h1>
  <p>This game is restricted to <b>@wix.com</b> accounts.</p>
  <p>You're signed in as <span class="email">${email.replace(/[<>&"]/g, '')}</span>, which isn't a Wix account.</p>
  <button id="switch" type="button">Sign in with a Wix account →</button>
</div>
<script>
  // The Wix runtime forbids top-level POST form navigations, so log out via
  // fetch (same-origin, allowed), then re-enter login forcing an account prompt.
  document.getElementById('switch').addEventListener('click', async function () {
    this.disabled = true; this.textContent = 'Switching…';
    try { await fetch('/api/auth/logout?returnToUrl=/', { method: 'POST', credentials: 'include' }); } catch (e) {}
    location.href = '/api/auth/login?prompt=login&returnToUrl=/';
  });
</script>
</body></html>`;
  return new Response(html, { status: 403, headers: { 'content-type': 'text/html; charset=utf-8' } });
}
