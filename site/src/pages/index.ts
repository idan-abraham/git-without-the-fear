import type { APIRoute } from 'astro';
import homeHtml from '../home.html?raw';

export const prerender = false;

// Public home chooser: presentation or game. Both destinations (/deck, /play)
// enforce the @wix.com login gate themselves, so this landing needs no auth.
export const GET: APIRoute = async () =>
  new Response(homeHtml, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'private, no-store' } });
