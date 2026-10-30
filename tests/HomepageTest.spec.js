const {test,expect}=require('@playwright/test');

test('homepage',async({page  })=>{
    //  Anonomus function

    await page.goto('https://www.demoblaze.com/');
    const val=await page.title();
    console.log(`page title is ${val}`);

    expect(val).toEqual('STORE')
    page.close();
});