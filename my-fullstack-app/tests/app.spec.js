import { test, expect } from '@playwright/test';

test('should load backend data successfully', async ({ page }) => {
  
  await page.goto('http://localhost:8080');

  
  const backendMessage = page.locator('text=Hello from the backend!');
  
  
  const versionInfo = page.locator('text=App Version: 1.0.0');

  
  await expect(backendMessage).toBeVisible();
  await expect(versionInfo).toBeVisible();
});

test('should show loading state initially', async ({ page }) => {
  await page.goto('http://localhost:8080');
  
  
});