import type { APIRoute } from 'astro';
import realHtml from '../real.html?raw';
import { checkAccess, deniedPage } from '../lib/gate';
export const prerender = false;
export const GET: APIRoute = async ({ redirect }) => {
  const a = await checkAccess();
  if (a.status === 'anon') return redirect('/api/auth/login?returnToUrl=/real');
  if (a.status === 'denied') return deniedPage(a.email);
  return new Response(realHtml, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'private, no-store' } });
};
