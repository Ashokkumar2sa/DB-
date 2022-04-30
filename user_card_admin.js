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


    await page.click('text=Users & Groups');
  
    // Click text=New user
    await page.click('text=New user');
    
    for(var i =1;i<100;i++){
  
          await page.click('text=Title Mrs.Mr.Ms.MasterDoctor >> span[role="presentation"]');
          var ra4 = Math.floor(Math.random() * (5));
          s_list = ["Mr.", "Ms." , "Mrs." , "Master", "Doctor"];
          var s_type = s_list[ra4];
          await page.fill(':nth-match(input[role="searchbox"], 2)', s_type);
          // Press Enter
          await page.press(':nth-match(input[role="searchbox"], 2)', 'Enter');
          // Click input[name="lastname"]
  
          await page.click('input[name="lastname"]');
          // Fill input[name="lastname"]
          var l_name ="lastname"+ String(i+100);
          await page.fill('input[name="lastname"]', l_name);
          // Click input[name="firstname"]
  
          await page.click('input[name="firstname"]');
          // Fill input[name="firstname"]
          var f_name = "firstname"+String(i+100);
          await page.fill('input[name="firstname"]', f_name);
          // Click input[name="login"]
          await page.click('input[name="login"]');
          // Fill input[name="login"]
          var login = f_name;
          await page.fill('input[name="login"]', login);
          // Select 1
          await page.selectOption('select[name="admin"]', '1');
          // Click text=Gender Male Female Other >> span[role="presentation"]
          await page.click('text=Gender Male Female Other >> span[role="presentation"]');
          // Fill :nth-match(input[role="searchbox"], 2)
          var ra5 = Math.floor(Math.random() * (3));
          y_list = ["Male", "Female", "Other"];
          var y_type = y_list[ra5];
          await page.fill(':nth-match(input[role="searchbox"], 2)', y_type);
          // Press Enter
          await page.press(':nth-match(input[role="searchbox"], 2)', 'Enter');
          // Click text=Supervisor SuperAdmin >> span[role="textbox"]
          await page.click('//html/body/div[4]/div[2]/div/form/div[1]/table[1]/tbody/tr[8]/td[2]/span[2]/span[1]/span/span[2]/b');
          // Click li[role="option"]:has-text("SuperAdmin")
          await page.click('li[role="option"]:has-text("SuperAdmin")');
          // Click text=Force expense report validator SuperAdmin >> span[role="textbox"]
          await page.click('//html/body/div[4]/div[2]/div/form/div[1]/table[1]/tbody/tr[9]/td[2]/span[2]/span[1]/span/span[2]/b');
          // Click li[role="option"]:has-text("SuperAdmin")
          await page.click('li[role="option"]:has-text("SuperAdmin")');
          // Click text=Force leave request validator SuperAdmin >> span[role="textbox"]
          await page.click('//html/body/div[4]/div[2]/div/form/div[1]/table[1]/tbody/tr[10]/td[2]/span[2]/span[1]/span/span[2]/b');
          // Click li[role="option"]:has-text("SuperAdmin")
          await page.click('li[role="option"]:has-text("SuperAdmin")');
          // Click text=Now

          await page.locator('input[name="datestartvalidity"]').click();
          // Fill input[name="datestartvalidity"]
          var date5 = randomDate();
          await page.locator('input[name="datestartvalidity"]').fill(date5);

          var date1 = randomDate();
          await page.click('input[name="dateendvalidity"]');
          // Fill input[name="dateendvalidity"]
          await page.fill('input[name="dateendvalidity"]', date1);
          // Click input[name="password"]

          await page.click('input[name="password"]');
          // Fill input[name="password"]
          var pass = l_name+"@"
          await page.fill('input[name="password"]', pass);
          // Click textarea[name="address"]
          await page.click('textarea[name="address"]');
          // Fill textarea[name="address"]
          var addr = makeid(1) + makeids(Math.floor(Math.random()*(10)))
          await page.fill('textarea[name="address"]', addr);
          // Click input[name="zipcode"]
          await page.click('input[name="zipcode"]');
          var zip = Math.floor(Math.random()*(100000)+800000)
          await page.fill('input[name="zipcode"]', String(zip));
 
         
          // Click input[name="town"]
          await page.click('input[name="town"]');
          // Fill input[name="town"]
          var town = makeid(1) + makeids(Math.floor(Math.random()*(3)+5));
          await page.fill('input[name="town"]', town);
          await page.locator('text=Country Afghanistan (AF) Åland Islands (AX) Albania (AL) Algeria (DZ) American S >> b[role="presentation"]').click();
          // Fill input[role="searchbox"] >> nth=1
          await page.locator('input[role="searchbox"]').nth(1).fill('India');
          // Click li[role="option"]:has-text("India (IN)")
          await page.locator('li[role="option"]:has-text("India (IN)")').click();
          
          // Click text=State/Province ----- Andorra ----- AD-002 - CanilloAD-003 - EncampAD-004 - La Ma >> span[role="presentation"]
          await page.click('text=State/Province ----- Andorra ----- AD-002 - CanilloAD-003 - EncampAD-004 - La Ma >> span[role="presentation"]');
          // Fill :nth-match(input[role="searchbox"], 2)
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
          await page.fill(':nth-match(input[role="searchbox"], 2)', state[ra11]);
          // Press Enter
          await page.press(':nth-match(input[role="searchbox"], 2)', 'Enter');
          // Click input[name="office_phone"]
          await page.click('input[name="office_phone"]');
          // Fill input[name="office_phone"]
          var oph = Math.floor(Math.random()*(1000000000)+8000000000);
          await page.fill('input[name="office_phone"]', String(oph));
          // Click input[name="user_mobile"]
          await page.click('input[name="user_mobile"]');
          // Fill input[name="user_mobile"]
          var uph = Math.floor(Math.random()*(1000000000)+8000000000);
          await page.fill('input[name="user_mobile"]', String(uph));
          // Click input[name="office_fax"]
          await page.click('input[name="office_fax"]');
          // Fill input[name="office_fax"]
          var ofax = Math.floor(Math.random()*(1000000000)+8000000000);
          await page.fill('input[name="office_fax"]', String(ofax));
          // Click input[name="email"]
          await page.click('input[name="email"]');
          // Fill input[name="email"]
          var mail = f_name+"@gmail.com"
          await page.fill('input[name="email"]',mail);
          // Click input[name="accountancy_code"]
          // await page.click('input[name="accountancy_code"]');
          // // Fill input[name="accountancy_code"]
          // var ac = Math.floor(Math.random()*(1000000)+8000000);
          // await page.fill('input[name="accountancy_code"]', String(ac));
          // Click input[name="job"]

          await page.click('input[name="job"]');
          // Fill input[name="job"]
          var job = "job" + String(Math.floor(Math.random()*(100)+1));
          await page.fill('input[name="job"]', job);
          // Click input[name="thm"]
          await page.click('input[name="thm"]');
          // Fill input[name="thm"]
          var ds = Math.floor(Math.random()*(50)+50);
          await page.fill('input[name="thm"]', String(ds));
          // Click input[name="tjm"]
          await page.click('input[name="tjm"]');
          // Fill input[name="tjm"]
          var ms = Math.floor(Math.random()*(100)+400);
          await page.fill('input[name="tjm"]', String(ms));
          // Click input[name="salary"]
          await page.click('input[name="salary"]');
          // Fill input[name="salary"]
          var ss = Math.floor(Math.random()*(10000)+10000);
          await page.fill('input[name="salary"]', String(ss));
          // Click input[name="weeklyhours"]
          await page.click('input[name="weeklyhours"]');
          // Fill input[name="weeklyhours"]
          var wh = Math.floor(Math.random()*(10)+40);
          await page.fill('input[name="weeklyhours"]', String(wh));
          // Cli
          await page.click('input[name="dateemployment"]');
          // Fill input[name="dateemployment"]
          var date2 = randomDate();
          await page.fill('input[name="dateemployment"]', date2);
        
          // Click input[name="dateemploymentend"]
          await page.click('input[name="dateemploymentend"]');
          // Fill input[name="dateemploymentend"]
          var date3 = randomDate();
          await page.fill('input[name="dateemploymentend"]', date3);
          // Click input[name="dateofbirth"]
          await page.click('input[name="dateofbirth"]');
          // Fill input[name="dateofbirth"]
          var date4 = randomDate();
          await page.fill('input[name="dateofbirth"]', date4);
          // Click text=Create user
          
          await page.click('text=Create user');
          
          // Click text=New user
          await page.click('text=New user');
  }

})();
/*

 for(var i=1;i<5;i++){
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
    */