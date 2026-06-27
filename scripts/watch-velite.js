#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const watchDir = path.join(process.cwd(), 'posts');
const cmd = 'npx velite';
let timer = null;
const debounceMs = 400;

function runVelite() {
  console.log(`[velite-watch] Running: ${cmd}`);
  const p = exec(cmd, { cwd: process.cwd() });
  p.stdout.pipe(process.stdout);
  p.stderr.pipe(process.stderr);
  p.on('exit', (code) => {
    console.log(`[velite-watch] velite finished with code ${code}`);
  });
}

function scheduleRun() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(runVelite, debounceMs);
}

function startWatch() {
  if (!fs.existsSync(watchDir)) {
    console.error(`[velite-watch] Watch directory does not exist: ${watchDir}`);
    process.exit(1);
  }

  // Initial build
  runVelite();

  console.log(`[velite-watch] Watching ${watchDir} for .mdx changes...`);

  try {
    fs.watch(watchDir, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      if (!filename.endsWith('.mdx') && !filename.endsWith('.md')) return;
      console.log(`[velite-watch] ${eventType} detected: ${filename}`);
      scheduleRun();
    });
  } catch (err) {
    console.error('[velite-watch] fs.watch failed:', err);
    console.error('[velite-watch] You can run `pnpm run velite:build` manually to regenerate .velite/posts.json');
    process.exit(1);
  }
}

startWatch();
