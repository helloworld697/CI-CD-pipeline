// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',         
  testMatch: '**/*.spec.js',
  webServer: {
    command: 'npm run start', 
    url: 'http://localhost:8080/health', 
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, 
  },
  use: {
    baseURL: 'http://localhost:8080',
  },
});