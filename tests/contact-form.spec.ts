// tests/contact-form.spec.ts - Simple contact form test for parkbad-gt.de
import { test, expect } from '@playwright/test';

test('contact form submission', async ({ page }) => {
  // Navigate to homepage and then to contact page
  await page.goto('/');
  await page.getByRole('link', { name: 'Kontakt' }).click();
  
  // Fill out the contact form with sample data
  await page.getByRole('textbox', { name: 'Vorname' }).fill('Test');
  await page.getByRole('textbox', { name: 'Nachname' }).fill('User');
  await page.getByRole('textbox', { name: 'E-Mail' }).fill('test@example.com');
  await page.getByRole('textbox', { name: 'Telefon' }).fill('01764152819881');
  await page.getByRole('textbox', { name: 'Ihre Nachrricht' }).fill('Test Message from Playwright automation');
  
  // Submit the form
  await page.getByRole('button', { name: 'absenden' }).click();
  
  // Verify submission was successful (adjust this based on your actual success message)
  await expect(page.locator('text=/erfolgreich|gesendet|danke/i')).toBeVisible({ timeout: 10000 });
}); 