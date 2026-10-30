import {test,expect} from '@playwright/test'

test('built-inLocator', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    // await page.getByAltText('')
    await expect(page.getByAltText('company-branding')).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')

    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{type:'submit'}).click();
    await expect(page.getByText('Mohan sharma')).toBeVisible();
    console.log("close----->")

    
    // page.getByAltText('')--> Based on Alt tag or Attribute and its value
    // page.getByLabel('')  --> Based on lebel tag and aria-label attribute name 
    // page.getByPlaceholder('') based on attribute name
    // page.getByRef('') --> baed on ref attribute name
    // page.getByTestId('')--> based on testid Attribute
    // page.getByText('')  --> based on text
    // page.getByTitle('') --> Based on Title attribute name   

    await page.close()
    
})