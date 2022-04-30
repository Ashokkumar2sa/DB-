const playwright = require('playwright');

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
    var j =3144;
    for(var k =0;k<80;k++){
      
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
      await page.click('#mainmenutd_project a div');
    
      // Click text=New lead or project
      await page.click('text=New lead or project');
    
      for(var i = 1;i<50;i++){
          // Fill input[name="title"]
          var name = "project"+String(j);
          await page.fill('input[name="title"]', name);
          j++;

          // Click #select2-socid-container >> text=Select a third party
          await page.click('#select2-socid-container >> text=Select a third party');
          // Fill :nth-match(input[role="searchbox"], 2)
          var party = "party"+ String(Math.floor(Math.random()*(100))+100);
          await page.fill(':nth-match(input[role="searchbox"], 2)', party);
          // Press Enter
          await page.press(':nth-match(input[role="searchbox"], 2)', 'Enter');
          // Click text=Project contacts Everybody Project contacts >> b[role="presentation"]

          await page.click('text=Project contacts Everybody Project contacts >> b[role="presentation"]');
          // Click li[role="option"]:has-text("Everybody")
          var ra1 = Math.floor(Math.random()*(2));
          if(ra1 == 0) {
              await page.click('li[role="option"]:has-text("Everybody")');
          }
          else {
              await page.click('li[role="option"]:has-text("Project contacts")');
          }

          await page.click('input[name="projectstart"]');
          // Fill input[name="projectstart"]
          var [date2,y1] = randomDate(2002);
          await page.fill('input[name="projectstart"]', date2);

          await page.click('input[name="projectend"]');
          // Fill input[name="projectend"]
          var [date1,y2] = randomDate(y1);
          await page.fill('input[name="projectend"]', date1);
          
          
          // Click text=Lead status ProspectionQualificationProposalNegociationWonLost >> span[role="presentation"]
          await page.click('//html/body/div[3]/div[2]/div/form/div[1]/table/tbody/tr[8]/td[2]/span[1]/span[1]/span/span[2]/b');
          // Click li[role="option"]:has-text("Proposal")
          l_list = ["Prospection", "Qualification", "Proposal", "Negociation", "Won", "Lost"];
          var ra2 = Math.floor(Math.random()*(6));
          await page.locator('input[role="searchbox"]').nth(1).fill(l_list[ra2]);
          // Press Enter
          await page.locator('input[role="searchbox"]').nth(1).press('Enter');

          // Click input[name="opp_amount"]
          await page.click('input[name="opp_amount"]');
          // Fill input[name="opp_amount"]
          var ra3 = Math.floor(Math.random()*(1000)) + 1000;
          await page.fill('input[name="opp_amount"]', String(ra3));
          // Click input[name="budget_amount"]
          await page.click('input[name="budget_amount"]');
          // Fill input[name="budget_amount"]
          var ra4 = Math.floor(Math.random()*(1000))+ 1000;
          await page.fill('input[name="budget_amount"]', String(ra4));
          // Click text=Create draft
          await page.click('text=Create draft');
          
          await page.click('text=Validate');
        
          await page.click('button:has-text("Yes")');
          
          await page.click('text=New lead or project');

          //await expect(page).toHaveURL('http://localhost/dolibarr/projet/card.php?leftmenu=projects&action=create');
      }
    
    await browser.close();
}
  

})();
