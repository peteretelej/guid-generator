import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/guid-generator/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Guid Generator/);
});
