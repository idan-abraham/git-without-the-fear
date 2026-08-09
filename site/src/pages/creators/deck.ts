import type { APIRoute } from 'astro';
import deckHtml from '../../creators-deck.html?raw';
import { checkAccess, deniedPage } from '../../lib/gate';

export const prerender = false; // per-request so the login gate is enforced

export const GET: APIRoute = async ({ redirect }) => {
  const a = await checkAccess();
  if (a.status === 'anon') return redirect('/api/auth/login?returnToUrl=/creators/deck');
  if (a.status === 'denied') return deniedPage(a.email);
  return new Response(deckHtml, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'private, no-store' } });
};
