# Svelte + Vite

This template should help get you started developing with Svelte5 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## How to upgrade to Svelte 5 RC

Make sure you are Node 20, eg with pkgx run `env +node@20`

Upgrade to Svelte 5
 ```
 npm install -D svelte@next
 ```
Upgprade Vite Plugin Svelte to 4 
```
npm install -D @sveltejs/vite-plugin-svelte@next
```
Adapt `main.js` and use `mount`: see [Svelte 5 Prerview Mount](https://svelte-5-preview.vercel.app/docs/imports#svelte-mount)