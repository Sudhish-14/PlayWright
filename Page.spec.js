const { chromium,test,expect} = require("@playwright/test")

test('Browser launch',async()=>{
    const Browser=await chromium.launch({
        headless:false
    }
);
const page=await Browser.newPage();
await page.goto("https://www.chemistwarehouse.com.au/")
const PageTitle=await page.title();
await expect(page).toHaveTitle(PageTitle)
console.log(PageTitle)
// const PageURL=await page.url();
// await expect(page).toHaveURL(PageURL);
// console.log(PageURL)

// await page1.waitForNavigation();

// const page1=await Browser.newPage();
// await page1.goto("https://www.flipkart.com/")
// const PageTitle1=await page1.title();
// await expect(page1).toHaveTitle(PageTitle)
// console.log(PageTitle)
// const PageURL1=await page1.url();
// await expect(page1).toHaveURL(PageURL1);
// console.log(PageURL1)


})