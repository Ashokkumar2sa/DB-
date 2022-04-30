const playwright = require('playwright');

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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
  // Go to http://localhost/index.php?mainmenu=home
  await page.goto('http://localhost/index.php?mainmenu=home&leftmenu=home');
  // Click [placeholder="Login"]
  await page.locator('[placeholder="Login"]').click();
  // Fill [placeholder="Login"]
  await page.locator('[placeholder="Login"]').fill('Ashok');
  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('Ashok2sa-');
  // Press Enter
  await page.locator('[placeholder="Password"]').press('Enter');
  
  // Click #mainmenutd_members div >> nth=1
  await page.locator('#mainmenutd_members div').nth(1).click();
  
  // Click text=List >> nth=0
  await page.locator('text=List').first().click();
  
  // Click input[name="search_ref"]
 
  
  for(var i =0;i<10;i++){
    await page.locator('input[name="search_ref"]').click();
    // Fill input[name="search_ref"]
    var ref =  Math.floor(Math.random()*(600)+1);
    await page.locator('input[name="search_ref"]').fill(String(ref));
    // Press Enter
    await page.locator('input[name="search_ref"]').press('Enter');
    await page.locator('text=List').first().click();
  }
  
  for(var i =0;i<10;i++){
    await page.locator('input[name="search_firstname"]').click();
    // Fill input[name="search_firstname"]
    f_name = makeid(Math.floor(Math.random() * (5))+5)  ;
    await page.locator('input[name="search_firstname"]').fill(f_name);
    // Press Enter
    await page.locator('input[name="search_firstname"]').press('Enter');
    await page.locator('text=List').first().click();
  }

 
//   await page.locator('input[name="search_lastname"]').click();
//   // Fill input[name="search_lastname"]
//   l_name = makeid(Math.floor(Math.random() * (5))+5)  ;
//   await page.locator('input[name="search_lastname"]').fill(l_name);
//   // Press Enter
//   await page.locator('input[name="search_lastname"]').press('Enter');

  for(var i =0;i<10;i++){
    await page.locator('input[name="search_company"]').click();
    // Fill input[name="search_company"]
    var cn = "Company"+String(Math.floor(Math.random()*(100)+1))
    await page.locator('input[name="search_company"]').fill(cn);
    // Press Enter
    await page.locator('input[name="search_company"]').press('Enter');
    await page.locator('text=List').first().click();
  }
  for(var i =0;i<10;i++){
    // Click input[name="search_email"]
    await page.locator('input[name="search_email"]').click();
    // Fill input[name="search_email"]
    var mail = l_name+"@gmail.com" ;
    await page.locator('input[name="search_email"]').fill(mail);
    // Press Enter
    await page.locator('input[name="search_email"]').press('Enter');
    await page.locator('text=List').first().click();
  }


  for(var i =0;i<10;i++){
  // Click text=Without contribution Up-to-date Out-of-date Out-of-date >> b[role="presentation"]
    await page.locator('text=Without contribution Up-to-date Out-of-date Out-of-date >> b[role="presentation"]').click();
    await page.locator('li[role="option"]:has-text("Up-of-date")').click();
    // Click button[name="button_search_x"]
    await page.locator('button[name="button_search_x"]').click();
    await page.locator('text=List').first().click();
  }


});