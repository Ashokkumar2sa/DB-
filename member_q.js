const playwright = require('playwright');

function randomDate(start, end) {
  var y1 = Math.floor(Math.random() * (2010- 1980)) + 1980;
  let m1 = Math.floor(Math.random() * (12)) + 1;
  let d1 = Math.floor(Math.random() * (28)) + 1;
 
  return String(m1) +"/" + String(d1) + "/" + String(y1);
}



function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
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
    //await expect(page).toHaveURL('http://localhost/dolibarr/index.php?mainmenu=home');
    // Click text=Members
    await page.locator('#mainmenutd_members div').nth(1).click();
  
  // Click text=List >> nth=0
  await page.locator('text=List').first().click();
  
  // Click input[name="search_ref"]
 
/* FIRSTNAME, EMAIL, GENDER */
  for(var i = 0; i < 3; i++){
    await page.locator('input[name="search_firstname"]').click();
    // Fill input[name="search_firstname"]
    f_name = makeid(Math.floor(Math.random() * (2))+2);
    await page.locator('input[name="search_firstname"]').fill(f_name);


    await page.locator('input[name="search_email"]').click();
    // Fill input[name="search_email"]
    var mail = makeid(5)+"@gmail.com" ;
    await page.locator('input[name="search_email"]').fill(mail);
    // Press Enter
    //await page.locator('input[name="search_email"]').press('Enter');
    //await page.locator('text=List').first().click();


    await page.locator('//html/body/div[3]/div[2]/div/form/div[2]/table/tbody/tr[1]/td[5]/span/span[1]/span/span[2]').click();
    // Click #select2-search_gender-result-j1cl-man
    var k = Math.floor(Math.random()*(3));
    if(k==0) await page.locator('li[role="option"]:has-text("Female")').click();
    
    if(k==1) await page.locator('li[role="option"]:has-text("Other")').click();
    
    if(k==2) await page.locator('//html/body/span/span/span[2]/ul/li[2]').click();
    
    await page.locator('button[name="button_search_x"]').click();
  
  }

  state = [ "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Dadra & Nagar Haveli",
  "Daman & Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"]

  /* GENDER, STATE, ZIP, COMPANY */

  for(var i = 1;i<3;i++){

    await page.locator('//html/body/div[3]/div[2]/div/form/div[2]/table/tbody/tr[1]/td[5]/span/span[1]/span/span[2]').click();
    // Click #select2-search_gender-result-j1cl-man
    var k = Math.floor(Math.random()*(3));
    if(k==0) await page.locator('li[role="option"]:has-text("Female")').click();
    
    if(k==1) await page.locator('li[role="option"]:has-text("Other")').click();
    
    if(k==2) await page.locator('//html/body/span/span/span[2]/ul/li[2]').click();

    await page.locator('input[name="search_state"]').click();
    // Fill input[name="search_state"]
    var ra1 = Math.floor(Math.random() * (36));
    await page.locator('input[name="search_state"]').fill(state[ra1]);
    await page.locator('input[name="search_zip"]').click();
    // Fill input[name="search_zip"]
    var zip = Math.floor(Math.random()*(100))+100;
    await page.locator('input[name="search_zip"]').fill(String(zip));

    await page.locator('input[name="search_company"]').click();
    // Fill input[name="search_company"]
    var nc = "Company" + String(Math.floor(Math.random()*(100)+1));
    await page.locator('input[name="search_company"]').fill(nc);

    await page.locator('button[name="button_search_x"]').click();


  }


  /* EMAIL, COMPANY, STATE, CIVILITY */

  for(var i = 1;i<3;i++){

    await page.locator('//html/body/div[3]/div[2]/div/form/div[2]/table/tbody/tr[1]/td[5]/span/span[1]/span/span[2]').click();
    // Click #select2-search_gender-result-j1cl-man
    var k = Math.floor(Math.random()*(3));
    if(k==0) await page.locator('li[role="option"]:has-text("Female")').click();
    
    if(k==1) await page.locator('li[role="option"]:has-text("Other")').click();
    
    if(k==2) await page.locator('//html/body/span/span/span[2]/ul/li[2]').click();

    await page.locator('input[name="search_email"]').click();
    // Fill input[name="search_email"]
    var mail = makeid(5)+"@gmail.com" ;
    await page.locator('input[name="search_email"]').fill(mail);

    await page.locator('input[name="search_company"]').click();
    // Fill input[name="search_company"]
    var nc = "Company" + String(Math.floor(Math.random()*(100)+1));
    await page.locator('input[name="search_company"]').fill(nc);

    await page.locator('input[name="search_state"]').click();
    // Fill input[name="search_state"]
    var ra2 = Math.floor(Math.random() * (36));
    await page.locator('input[name="search_state"]').fill(state[ra2]);

    await page.locator('input[name="search_civility"]').click();
    // Fill input[name="search_civility"]
    sal = ["DR", "MME", "MLE", "MTRE", "MR"];
    var ra2 = Math.floor(Math.random()*(5));
    await page.locator('input[name="search_civility"]').fill(sal[ra2]);
  
    await page.locator('button[name="button_search_x"]').click();

  }
  
})();
