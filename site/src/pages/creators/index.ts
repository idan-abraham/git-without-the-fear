import type { APIRoute } from 'astro';
import homeHtml from '../../creators-home.html?raw';

export const prerender = false;

// Public "creators" chooser: presentation or the real drill (no terminal game).
// Both destinations (/creators/deck, /creators/real) enforce the @wix.com login
// gate themselves, so this landing needs no auth.
export const GET: APIRoute = async () =>
  new Response(homeHtml, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'private, no-store' } });
