const{test,expect}=require('@playwright/test')

test('Assertion test',async({page})=>{
    await page.goto(`https://www.demoblaze.com/index.html`);

    // await page.getByRole('button',{name:'Next'}).click();

    await page.locator('#login2').click();
    const label = await page.getByLabel('Username:')
    // await page.waitForSelector('Username:')
      const actualText = await label.innerText();

    console.log('Label text:', actualText);

    expect(actualText).toBe('Username');



    
    // 
    // // await page.getByRole('button', { name: 'Next' }).scrollIntoViewIfNeeded();
    //  await page.mouse.wheel(0, 1000);
    // await page.getByRole('button', { text: 'Next' }).click();
    // console.log('click next Button')

})


