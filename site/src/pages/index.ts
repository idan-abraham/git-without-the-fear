import type { APIRoute } from 'astro';
import gameHtml from '../game.html?raw';
import { checkAccess, deniedPage } from '../lib/gate';

export const prerender = false; // must run per-request so the gate is enforced

export const GET: APIRoute = async ({ redirect }) => {
  const a = await checkAccess();
  if (a.status === 'anon') return redirect('/api/auth/login?returnToUrl=/');
  if (a.status === 'denied') return deniedPage(a.email);
  return new Response(gameHtml, { headers: { 'content-type': 'text/html; charset=utf-8' } });
};
