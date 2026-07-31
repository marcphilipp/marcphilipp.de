import { test, expect } from '@playwright/test';

const pages = {
  homepage: '/',
  'german-homepage': '/de/startseite/',
  contact: '/en/contact/',
  services: '/en/services/',
  'german-services': '/de/dienstleistungen/',
  'service-junit': '/en/services/junit/',
  'blog-post': '/blog/2012/03/13/database-tests-with-dbunit-part-1/',
};

test.describe('Visual Regression Tests', () => {
  for (const [name, path] of Object.entries(pages)) {
    test(name, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500); // Extra settling time for images/fonts
      await expect(page).toHaveScreenshot(`${name}.png`, {
        fullPage: true,
        // Small tolerance for font rendering/subpixel variations between runs
        maxDiffPixelRatio: 0.01,
        // Mask the copyright year in the footer
        mask: [page.locator('footer p.text-muted')],
      });
    });
  }
});
