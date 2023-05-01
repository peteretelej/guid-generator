import { test, expect } from "@playwright/test";

test.describe("App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/guid-generator/');
  });

  test("should display generated GUIDs", async ({ page }) => {
    const generateButton = await page.$("#generate-button");
    expect(generateButton).not.toBeNull();

    await generateButton?.click();
    
    await page.waitForSelector("#guid-text", { timeout: 5000 });
    const guidText = await page.$("#guid-text");
    expect(guidText).not.toBeNull();

    const guidTextContent = await guidText?.textContent();
    expect(guidTextContent).toMatch(/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/i);
  });

  test("should copy generated GUIDs to clipboard", async ({ page }) => {
    const generateButton = await page.$("#generate-button");
    expect(generateButton).not.toBeNull();

    await generateButton?.click();
    
    await page.waitForSelector("#copy-button", { timeout: 5000 });
    const copyButton = await page.$("#copy-button");
    expect(copyButton).not.toBeNull();

    await copyButton?.click();

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText()
    );
    expect(clipboardText).toMatch(/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/i);
  });
});