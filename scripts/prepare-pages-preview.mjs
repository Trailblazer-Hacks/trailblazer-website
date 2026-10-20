import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

// This directory is generated solely for testing the exported project URL.
await rm('.pages-preview', { recursive: true, force: true });
await mkdir('.pages-preview/trailblazer-website', { recursive: true });
await writeFile('out/.nojekyll', '');
await cp('out', '.pages-preview/trailblazer-website', { recursive: true });
