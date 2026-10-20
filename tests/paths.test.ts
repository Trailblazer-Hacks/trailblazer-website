import { test } from 'node:test';
import assert from 'node:assert/strict';
import { publicAsset } from '../src/lib/paths';

test('public assets work at a root host and GitHub project subpath', () => {
  assert.equal(publicAsset('/brand-patch.webp', ''), '/brand-patch.webp');
  assert.equal(
    publicAsset('/brand-patch.webp', '/trailblazer-website'),
    '/trailblazer-website/brand-patch.webp',
  );
  assert.equal(publicAsset('/icon.svg', '/trailblazer-website'), '/trailblazer-website/icon.svg');
});
