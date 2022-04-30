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
  await page.locator('#mainmenutd_project div').nth(1).click();
  
  // Click text=List >> nth=0
  await page.locator('text=List').first().click();
  for(var i=1;i<5;i++){
    await page.locator('text=List').first().click();
    await page.locator('input[name="search_ref"]').click();
     // Fill input[name="search_ref"]
     var ref =  Math.floor(Math.random()*(100)+1) ;
      await page.locator('input[name="search_ref"]').fill(String(ref));

    // Click input[name="search_label"]
    await page.locator('input[name="search_label"]').click();
    // Fill input[name="search_label"]
    var sl = makeids(3);
    await page.locator('input[name="search_label"]').fill(sl);

    var [date, y] = randomDate(2002);
    await page.locator('select[name="search_syear"]').selectOption(String(y));
    await page.locator('button[name="button_search_x"]').click();
}
  for(var i=1;i<5;i++){
    await page.locator('text=List').first().click();
    await page.locator('input[name="search_ref"]').click();
     // Fill input[name="search_ref"]
     var ref = Math.floor(Math.random()*(100)+1) ;
      await page.locator('input[name="search_ref"]').fill(String(ref));
      await page.locator('input[name="search_societe"]').click();
      // Fill input[name="search_societe"]
      var tp = "party"+String(Math.floor(Math.random()*(100)+100));
      await page.locator('input[name="search_societe"]').fill(tp);
     
      var [date, y] = randomDate(2002);
      await page.locator('select[name="search_syear"]').selectOption(String(y));
          // Select 2005
    await page.locator('select[name="search_eyear"]').selectOption('2005');

      await page.locator('button[name="button_search_x"]').click();

  }
  for(var i=1;i<5;i++){
    await page.locator('text=List').first().click();
    // Click input[name="search_label"]
    await page.locator('input[name="search_label"]').click();
    // Fill input[name="search_label"]
    var sl = makeids(3);
    await page.locator('input[name="search_label"]').fill(sl);
    await page.locator('input[name="search_societe"]').click();
    // Fill input[name="search_societe"]
    var tp = "party"+String(Math.floor(Math.random()*(100)+100));
    await page.locator('input[name="search_societe"]').fill(tp);

    var [date, y] = randomDate(2002);
    await page.locator('select[name="search_syear"]').selectOption(String(y));
    // Select 2005
    await page.locator('select[name="search_eyear"]').selectOption('2005');


    await page.locator('//html/body/div[3]/div[2]/div/form/div[2]/table/tbody/tr[1]/td[6]/span/span[1]/span/span[2]/b').click();
    var k =  Math.floor(Math.random()*(2)+1) ;
    if(k == 1) await page.locator('li[role="option"]:has-text("Project contacts")').click();
    if(k == 2)await page.locator('li[role="option"]:has-text("Everybody")').click();

    var l =  Math.floor(Math.random()*(6)+1) ;
    if(l==1)await page.locator('select[name="search_opp_status"]').selectOption('1');
    // Select 2
    if(l==2) await page.locator('select[name="search_opp_status"]').selectOption('2');
    // Select 3
    if(l==3)await page.locator('select[name="search_opp_status"]').selectOption('3');
    // Select 4
    if(l==4)await page.locator('select[name="search_opp_status"]').selectOption('4');
    // Select 6
    if(l==5) await page.locator('select[name="search_opp_status"]').selectOption('6');
    // Select 7
    if(l==6) await page.locator('select[name="search_opp_status"]').selectOption('7');
    await page.locator('button[name="button_search_x"]').click();

    } 
    for(var i=1;i<5;i++){
        await page.locator('text=List').first().click();
        await page.locator('input[name="search_ref"]').click();
         // Fill input[name="search_ref"]
         var ref =  Math.floor(Math.random()*(100)) ;
          await page.locator('input[name="search_ref"]').fill(String(ref));
    
          await page.locator('input[name="search_opp_amount"]').click();
          // Fill input[name="search_opp_amount"]
          var amount = Math.floor(Math.random()*(1000)+1000);
          await page.locator('input[name="search_opp_amount"]').fill(String(amount));
        await page.locator('button[name="button_search_x"]').click();
    }

})();   