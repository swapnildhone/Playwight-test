import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.locator('#app').click();
  await page.getByRole('link', { name: 'Time' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByText('-- Select --').first().click();
  await page.locator('#app').click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByText('-- Select --').first().click();
  await page.getByText('-- Select --').first().click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('testing candidate');
  await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByText('CandidatesJob TitleFinance').click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('');
  await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).click();
  await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).fill('nna');
  await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).press('Tab');
  await page.locator('.oxd-icon.bi-calendar').first().click();
  await page.getByRole('button').nth(5).click();
  await page.getByText('11').click();
  await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
  await page.getByRole('button').nth(5).click();
  await page.getByText('12').click();
  await page.getByText('-- Select --').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('listitem').filter({ hasText: 'QA Edit check Nrvtvf Doe' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});


//npx playwright codegen --target java