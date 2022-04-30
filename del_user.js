const playwright = require('playwright');
const { default: matchers } = require('playwright-expect/lib/matchers');

function randomDate(end) {
  var y1 = Math.floor(Math.random() * (2027- end)) + end;
  let m1 = Math.floor(Math.random() * (12)) + 1;
  let d1 = Math.floor(Math.random() * (28)) + 1;
 
  return [String(m1) +"/" + String(d1) + "/" + String(y1),y1];
}

function makeids(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

(async () => {

    const browser = await playwright["chromium"].launch({
        headless: false
    });

    //context
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost/index.php?mainmenu=home&leftmenu=home');
    // Click [placeholder="Login"]
    await page.click('[placeholder="Login"]');
    // Fill [placeholder="Login"]
    await page.fill('[placeholder="Login"]', 'Ashok');
    // Click [placeholder="Password"]
    await page.click('[placeholder="Password"]');
    // Fill [placeholder="Password"]
    await page.fill('[placeholder="Password"]', 'Ashok2sa-');
    // Press Enter
    await page.press('[placeholder="Password"]', 'Enter');
      // Click #mainmenutd_project div >> nth=1
    await page.locator('text=Users & Groups').click();
    
    // Click #id-left div:has-text("List of users") >> nth=2
    await page.locator('#id-left div:has-text("List of users")').nth(2).click();
   // for(var k=0;k<100;k++){
       //  /html/body/div[3]/div[2]/div/form/div[2]/table/tbody/tr[3]
    // #searchFormList > div.div-table-responsive > table > tbody > tr:nth-child(3)
    await page.click('//html/body/div[3]/div[2]/div/form/div[2]/table/tbody/tr[3]');
    await page.locator('text=Delete').click();
    
    await page.locator('button:has-text("Yes")').click();
   // }

  

})();   