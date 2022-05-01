const playwright = require('playwright');

function randomDate(start, end) {
  var y1 = Math.floor(Math.random() * (2010- 1980)) + 1980;
  let m1 = Math.floor(Math.random() * (12)) + 1;
  let d1 = Math.floor(Math.random() * (28)) + 1;
 
  return String(m1) +"/" + String(d1) + "/" + String(y1);
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
    for(var b = 1; b<100;b++){

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
    await page.click('text=Members');
    await page.click('text=New member');
    
    for(var i =1;i<40;i++){
      //await page.click('//html/body/div[2]/div[2]/div/form/div[1]/table/tbody[1]/tr[1]/td[2]/span/span[1]/span/span[2]');
      
      var x = "M"+ String(Math.floor(Math.random() * (100))+20);
      

      await page.locator('text=Member type General General_2 NM1 fhg M1 M2 M6 M7 M8 M11 M12 M13 M15 M20 M23 M25 >> span[role="presentation"]').click();

      await page.locator('input[role="searchbox"]').nth(1).click();
      // Fill input[role="searchbox"] >> nth=1
      await page.locator('input[role="searchbox"]').nth(1).fill(x);
      // Press Enter
      await page.locator('input[role="searchbox"]').nth(1).press('Enter');

      await page.click('//html/body/div[3]/div[2]/div/form/div[1]/table/tbody[1]/tr[2]/td[2]/span/span[1]/span/span[2]/b');
      // Click li[role="option"]:has-text("Individual")
      var ra3 = Math.floor(Math.random() * (2));
      if(ra3 == 0) {
          await page.locator('li[role="option"]:has-text("Individual")').click();
      }else {
        await page.locator('li[role="option"]:has-text("Corporation")').click();
      }
     
      
      var nc = "Company" + String(Math.floor(Math.random()*(100)+100));
     
      await page.click('input[name="societe"]');
      // Fill input[name="societe"]
      await page.fill('input[name="societe"]', nc);
    
      await page.click('//html/body/div[3]/div[2]/div/form/div[1]/table/tbody[1]/tr[4]/td[2]/span[1]/span[1]/span/span[2]');
      // Fill input[role="searchbox"]
      var ra4 = Math.floor(Math.random() * (5));
      s_list = ["Mr.", "Ms." , "Mrs." , "Master", "Doctor"];
      var s_type = s_list[ra4];
      await page.click('//html/body/span/span/span[1]/input');
      await page.fill('//html/body/span/span/span[1]/input', s_type);
      // Press Enter
      await page.press('//html/body/span/span/span[1]/input', 'Enter');

      l_name = makeid(1) + makeids(Math.floor(Math.random() * (3))+5)  ;
      
      await page.click('input[name="lastname"]');
      // Fill input[name="lastname"]
      await page.fill('input[name="lastname"]', l_name);

      f_name =  makeid(1) + makeids(Math.floor(Math.random() * (3))+5)  ;

      await page.click('input[name="firstname"]');
      // Fill input[name="firstname"]
      await page.fill('input[name="firstname"]', f_name);
      
      await page.click('//html/body/div[3]/div[2]/div/form/div[1]/table/tbody[1]/tr[7]/td[2]/span/span[1]/span/span[2]');
      // Fill input[role="searchbox"]
      var ra5 = Math.floor(Math.random() * (3));
      y_list = ["Male", "Female", "Other"];
      var y_type = y_list[ra5];
      await page.click('//html/body/span/span/span[1]/input');
      await page.fill('//html/body/span/span/span[1]/input', y_type);
      // Press Enter
      await page.press('//html/body/span/span/span[1]/input', 'Enter');


      await page.click('input[name="member_email"]');
      // Fill input[name="member_email"]
      var mid = l_name+"@gmail.com"
      await page.fill('input[name="member_email"]', mid);

      await page.click('input[name="member_url"]');
      // Fill input[name="member_url"]
      var wid = "www." + f_name +".com";
      await page.fill('input[name="member_url"]', wid);

      await page.click('textarea[name="address"]');
      // Fill textarea[name="address"]
      address = makeid(Math.floor(Math.random() * (50))+50)  ;
      await page.fill('textarea[name="address"]', address);

      await page.click('input[name="zipcode"]');
      // Fill input[name="zipcode"]
      var ra6 = Math.floor(Math.random() * (500000)) + 333333;
      await page.fill('input[name="zipcode"]', String(ra6));
      // Click input[name="town"]
      await page.click('input[name="town"]');
      // Fill input[name="town"]
      town =makeid(1) + makeids(Math.floor(Math.random() * (2))+5)  ;
      await page.fill('input[name="town"]', town);

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

      var ra11 = Math.floor(Math.random() * (36));
      await page.click('//html/body/div[3]/div[2]/div/form/div[1]/table/tbody[1]/tr[13]/td[2]/span[2]/span[1]/span/span[2]/b');
      // Fill input[role="searchbox"]
      await page.fill('//html/body/span/span/span[1]/input', state[ra11]);
      // Press Enter
      await page.press('//html/body/span/span/span[1]/input', 'Enter');

      await page.click('input[name="phone"]');
      // Fill input[name="phone"]
      var ra7 = Math.floor(Math.random() * (5000000000)) + 40000000000;
      await page.fill('input[name="phone"]', String(ra7));
      // Click input[name="phone_perso"]
      await page.click('input[name="phone_perso"]');
      // Fill input[name="phone_perso"]
      var ra8 = Math.floor(Math.random() * (5000000000)) + 40000000000;
      await page.fill('input[name="phone_perso"]', String(ra8));
      // Click input[name="phone_mobile"]
      await page.click('input[name="phone_mobile"]');
      // Fill input[name="phone_mobile"]
      var ra9 = Math.floor(Math.random() * (5000000000)) + 40000000000;
      await page.fill('input[name="phone_mobile"]', String(ra9));
    

      const d = randomDate(new Date(2012, 0, 1), new Date());
      await page.click('input[name="birth"]');
      // Fill input[name="birth"]
      await page.fill('input[name="birth"]', d);

      var ra10  = Math.floor(Math.random()*(2));
      if(ra10 == 1){
        await page.selectOption('select[name="public"]', '1');
      }else {
        await page.selectOption('select[name="public"]', '0');
      }
      
    await page.click('text=Create member');
    //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/card.php');
    // Click #id-right a:has-text("Validate")
    await page.click('#id-right a:has-text("Validate")');
    //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/card.php?rowid=1&action=valid');
    // Click button:has-text("Yes")
    await page.click('button:has-text("Yes")');
    //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/card.php?rowid=1&action=confirm_valid&confirm=yes&token=cccd18c0e9d3df9cc242e8a980504c01&send_mail=');
    // Click text=New member
    await page.click('text=New member');
  }
    }
})();
