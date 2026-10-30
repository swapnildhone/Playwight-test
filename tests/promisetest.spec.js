// Promisse learn
console.log('Start')

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const valu = false;
        if (valu) {
            resolve("Code is Resolve ")
        } else {
            reject(new Error(`why is code not working`))
        }
    }, 2000)
})

promise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

console.log('Stop')



import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
  await page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();
  await page.getByRole('row', { name: ' test.png test 53.16 kB' }).getByLabel('').check();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'QA Edit check Nrvtvf Doe' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});