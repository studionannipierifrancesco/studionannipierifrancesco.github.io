// 1. You MUST have this import line at the top
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 2. Since you use a custom domain (studiofisiolistiklivornopisa.it),
  // your site is at the root. Do NOT put the repo name here.
  base: '/', 
  
  // 3. This must be HTTPS to fix the "Mixed Content" error
  site: 'https://studiofisiolistiklivornopisa.it',
});
