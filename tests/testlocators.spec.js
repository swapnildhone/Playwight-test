// const {test,expect}=require ('@playwright/test');
import {test,expect} from  '@playwright/test'


test('login',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    const val=await page.title();
    console.log(`page title is ${val}`)
    await page.locator('#login2').click();
    await page.fill('#loginusername','pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.click("//button[@onclick='logIn()']")
    const validation=await page.locator("#logout2")
    await expect(validation).toBeVisible();
    page.close();
});

test('validateLinks',async ({page})=>{
    await page.goto('https://www.demoblaze.com/')
    const title =await page.title();
    console.log('page Name is - '+title)
    await page.waitForSelector('//a');
    await page.$$('//a')
    const nooflocator = await page.locator('//a');
    console.log('page links are '+await nooflocator.count());
})