const playwright = require('playwright');

function randomDate(end) {
  var y1 = Math.floor(Math.random() * (2010- end)) + end;
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
  // thi number is suffix of party name let it be unique so update it when restart the script
  var o = 1073;
  for(var k=0;k<100;k++){
        const browser = await playwright["chromium"].launch({
            headless: false
        });

        //context
        
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://localhost/index.php?mainmenu=home&leftmenu=homee');
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
        await page.click('#mainmenutd_companies a div');
    
      
      await page.click('text=New Third Party');

      for(var p = 1;p<100;p++){
      
            await page.click('input[name="name"]');
            // Fill input[name="name"]
            var name = "party"+ String(o);
            await page.fill('input[name="name"]', name );
            
            await page.click('input[name="name_alias"]');
            var alias = "alias"+String(o);
            await page.fill('input[name="name_alias"]', alias );
            o = o+1;
            await page.click('text=Prospect / CustomerProspectProspect / CustomerCustomerNot prospect, nor customer >> b[role="presentation"]');

            var i = Math.floor(Math.random() * (4));
            if(i == 0){
                await page.click('//html/body/span/span/span[2]/ul/li[2]');
            }else if(i == 1){
                await page.click('//html/body/span/span/span[2]/ul/li[3]');
            }else if(i==2){
                await page.click('//html/body/span/span/span[2]/ul/li[4]');
            }else {
                await page.click('//html/body/span/span/span[2]/ul/li[5]');
            }
            await page.click('text=Vendor Yes No Vendor Code >> b[role="presentation"]');
            var j = Math.floor(Math.random() * (2));
            if(j == 0){
                await page.click('li[role="option"]:has-text("Yes")');
            }else {
                await page.click('li[role="option"]:has-text("No")');
            }
            
            await page.click('text=Closed Open Open >> span[role="presentation"]');
            var k = Math.floor(Math.random() * (2));
            if(k ==0){
                await page.click('li[role="option"]:has-text("Closed")');
            }else {
                await page.click('li[role="option"]:has-text("Open")');  
            }
            
            await page.click('input[name="barcode"]');
            var barcode = makeid(Math.floor(Math.random() * (4)) + 5);
            await page.fill('input[name="barcode"]', barcode);

            await page.click('textarea[name="address"]');
            var address = makeids(Math.floor(Math.random()*(5) )+ 10);
            await page.fill('textarea[name="address"]', address);
            
            await page.click('input[name="zipcode"]');
            var zip = Math.floor(Math.random()*(300000) ) + 600000;
            await page.fill('input[name="zipcode"]',String(zip));
            // Click input[name="town"]
            await page.click('input[name="town"]');
            var city =  makeid(1)+makeids(Math.floor(Math.random()*(4))+5);
            await page.fill('input[name="town"]', city);
            // Click text=State/Province AN - Andaman & NicobarAP - Andhra PradeshAR - Arunachal PradeshAS >> b[role="presentation"]

            await page.click('text=State/Province AN - Andaman & NicobarAP - Andhra PradeshAR - Arunachal PradeshAS >> b[role="presentation"]');
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
                            "Puducherry"];
            
            await page.click(':nth-match(input[role="searchbox"], 4)');
            var ra1 = Math.floor(Math.random() * (36));
            await page.fill(':nth-match(input[role="searchbox"], 4)', state[ra1]);
            await page.press(':nth-match(input[role="searchbox"], 4)', 'Enter');

            // Click input[name="phone"]
            await page.click('input[name="phone"]');
            // Fill input[name="phone"]
            var ra2 = Math.floor(Math.random() * (1000000000)) + 80000000000;
            await page.fill('input[name="phone"]', String(ra2));
            // Click input[name="fax"]
            await page.click('input[name="fax"]');
            // Fill input[name="fax"]
            var ra3 = Math.floor(Math.random() * (1000000000)) + 80000000000;
            await page.fill('input[name="fax"]', String(ra3));
            // Click input[name="email"]
            await page.click('input[name="email"]');
            // Fill input[name="email"]
            var email = alias+"@gmail.com"
            await page.fill('input[name="email"]', email);
            // Click input[name="url"]
            await page.click('input[name="url"]');
            var url = "www." + name + ".com" ;
            await page.fill('input[name="url"]', url);
            // Click input[name="idprof1"]
            await page.click('input[name="idprof1"]');
            // Fill input[name="idprof1"]
            var p1 = Math.floor(Math.random()*(10000000000) + 900000000000);
            await page.fill('input[name="idprof1"]', String(p1));
            
            await page.click('input[name="idprof2"]');
            // Fill input[name="idprof2"]
            var pan = makeid(12);
            await page.fill('input[name="idprof2"]', String(pan));
            // Click input[name="idprof3"]
            await page.click('input[name="idprof3"]');
            // Fill input[name="idprof3"]
            var p2 = Math.floor(Math.random()*(100000000000000) + 9000000000000000);
            await page.fill('input[name="idprof3"]', String(p2));
            
            var ra4 = Math.floor(Math.random()*(2)) ;
            // Select 0
            if(ra4 == 0){
                await page.selectOption('select[name="assujtva_value"]', '0');
            } else {
                await page.selectOption('select[name="assujtva_value"]', '1');
            }

            await page.click('input[name="tva_intra"]');
            // Fill input[name="tva_intra"]
            var vat = makeid(10)
            await page.fill('input[name="tva_intra"]', vat);



            // Click text=Third-party type Governmental Large company Medium company Other Private individ >> span[role="presentation"]
            await page.click('text=Third-party type Governmental Large company Medium company Other Private individ >> span[role="presentation"]');
            // Click li[role="option"]:has-text("Small company")
            t_list = ["Governmental", "Large company", "Medium company", "Other", "Private individual", "Small company"];
            var ra5 = Math.floor(Math.random()*(6));
            // Fill :nth-match(input[role="searchbox"], 4)
          // console.log(ra5);
            await page.fill(':nth-match(input[role="searchbox"], 4)', String(t_list[ra5]));
            await page.press(':nth-match(input[role="searchbox"], 4)', 'Enter');


            await page.click('text=Third-party type Governmental Large company Medium company Other Private individ >> :nth-match(span[role="presentation"], 2)');
            // Fill :nth-match(input[role="searchbox"], 4)
            var ra6 = Math.floor(Math.random()*(6));
            ///console.log(ra6);
            si_list = ["1 - 5", "6 - 10", "11 - 50", "51 - 100", "100 - 500", "> 500"];
            await page.fill(':nth-match(input[role="searchbox"], 4)', si_list[ra6]);
            await page.press(':nth-match(input[role="searchbox"], 4)', 'Enter');
            
            await page.click('input[name="capital"]');
            // Fill input[name="capital"]
            var ra6 = Math.floor(Math.random()*(50000));
            await page.fill('input[name="capital"]', String(ra6));
            
            var ra7 = Math.floor(Math.random()*(10))+1;
            await page.selectOption('select[name="incoterm_id"]', String(ra7));
            await page.click('input[name="location_incoterms"]');
            // Fill input[name="location_incoterms"]
            await page.fill('input[name="location_incoterms"]', makeid(1)+makeids(10));
            
            await page.locator('text=Assigned to sales representative SuperAdmin Acprxwp Cgmibiz Actpgyb Qmaaiju Adhf >> ul').click();
            // Fill text=Assigned to sales representative SuperAdmin Acprxwp Cgmibiz Actpgyb Qmaaiju Adhf >> input[role="searchbox"]
            var mm = "firstname"+String(Math.floor(Math.random()*(100)+100));
            await page.locator('text=Assigned to sales representative SuperAdmin Acprxwp Cgmibiz Actpgyb Qmaaiju Adhf >> input[role="searchbox"]').fill(mm);
            // Press Enter
            await page.locator('text=Assigned to sales representative SuperAdmin Acprxwp Cgmibiz Actpgyb Qmaaiju Adhf >> input[role="searchbox"]').press('Enter');
            //await page.waitForTimeout(15000);
            await page.click('text=Create third party');
            await page.click('//html/body/div[3]/div[1]/div/div/div[2]/div[3]/a');

            
      }
      await browser.close();
  }
})();





/*const playwright = require('playwright');

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
    await page.goto('http://localhost/dolibarr/index.php?mainmenu=home');
    // Click [placeholder="Login"]
    await page.click('[placeholder="Login"]');
    // Fill [placeholder="Login"]
    await page.fill('[placeholder="Login"]', 'admin');
    // Click [placeholder="Password"]
    await page.click('[placeholder="Password"]');
    // Fill [placeholder="Password"]
    await page.fill('[placeholder="Password"]', 'Ashok2sa-');
    // Press Enter
    await page.press('[placeholder="Password"]', 'Enter');
    //await expect(page).toHaveURL('http://localhost/dolibarr/index.php?mainmenu=home');
    // Click text=Members
    await page.click('text=Members');
    //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/index.php?mainmenu=members&leftmenu=');
    // Click :nth-match(:text("New"), 3)
    await page.click(':nth-match(:text("New"), 3)');
    //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/type.php?leftmenu=setup&mainmenu=members&action=create');

    for(var i=1;i<2000;i++){
        var label_i = "M" + String(i);
        await page.fill('input[name="label"]', label_i);
        // Click text=Closed Open Open >> b[role="presentation"]
        await page.click('text=Closed Open Open >> b[role="presentation"]');
        // Click li[role="option"]:has-text("Closed")
        var ra3 = Math.floor(Math.random() * (2));
        s_list = ["Closed", "Open"];
        var status = s_list[ra3];
        await page.fill('input[role="searchbox"]', status);
        // Press Enter
        await page.press('input[role="searchbox"]', 'Enter');
        // Click text=Corporation and Individual Individual Corporation Corporation and Individual >> span[role="presentation"]
        await page.click('text=Corporation and Individual Individual Corporation Corporation and Individual >> span[role="presentation"]');
        // Fill input[role="searchbox"]
        var ra4 = Math.floor(Math.random() * (3));
        if(ra4 == 0){
          await page.fill('input[role="searchbox"]', "Corporation and Individual");
          await page.press('input[role="searchbox"]', 'Enter');
        }else if(ra4 == 1 ){
          await page.click('//html/body/span/span/span[2]/ul/li[2]');
        }else{
          await page.click('//html/body/span/span/span[2]/ul/li[3]');
        }
        
        // Press Enter
        
        var ra8  = Math.floor(Math.random()*(2));
        if(ra8 == 1){
          await page.selectOption('select[name="subscription"]', '1');
        }else {
          await page.selectOption('select[name="subscription"]', '0');
        }

        
        // Click input[name="amount"]
        await page.click('input[name="amount"]');
        // Fill input[name="amount"]
        // Fill input[name="amount"]
        await page.fill('input[name="amount"]', '');
      
        var ra5 = Math.floor(Math.random()*(2000)) + 10000;
        var ra5s = String(ra5);
        //var cc = "'input[name=\""+ "amount"+ "\"]'," + "'" + String(ra5) +"'";
        //console.log(cc);
        await page.fill('input[name="amount"]', ra5s);
        // Select 0
        var ra6  = Math.floor(Math.random() * (2));
        if(ra6 == 0){
          await page.selectOption('select[name="vote"]', '0');

        }
        else {
          await page.selectOption('select[name="vote"]', '1');
        }
       
        // Click input[name="duration_value"]
        await page.click('input[name="duration_value"]');
        // Fill input[name="duration_value"]
        var ra7  = Math.floor(Math.random() * (6));
        await page.fill('input[name="duration_value"]', String(ra7));
        // Click textarea[name="comment"]
        await page.click('textarea[name="comment"]');
        // Fill textarea[name="comment"]
        comment = makeids(20)
        await page.fill('textarea[name="comment"]', comment);
        // Click textarea[name="mail_valid"]
        await page.click('textarea[name="mail_valid"]');
        // Fill textarea[name="mail_valid"]
        mail_c = makeids(15)
        await page.fill('textarea[name="mail_valid"]', mail_c);
        // Click text=Save
        await page.click('text=Save');
        //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/type.php');

        await page.goto('http://localhost/dolibarr/adherents/type.php?leftmenu=setup&mainmenu=members&action=create');
    }
    
})();

/////
const playwright = require('playwright');

function randomDate(start, end) {
  var y1 = Math.floor(Math.random() * (2010- 1980)) + 1980;
  let m1 = Math.floor(Math.random() * (12)) + 1;
  let d1 = Math.floor(Math.random() * (28)) + 1;
 
  return String(m1) +"/" + String(d1) + "/" + String(y1);
}

function makeids(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }


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
    await page.goto('http://localhost/dolibarr/index.php?mainmenu=home');
    // Click [placeholder="Login"]
    await page.click('[placeholder="Login"]');
    // Fill [placeholder="Login"]
    await page.fill('[placeholder="Login"]', 'admin');
    // Click [placeholder="Password"]
    await page.click('[placeholder="Password"]');
    // Fill [placeholder="Password"]
    await page.fill('[placeholder="Password"]', 'Ashok2sa-');
    // Press Enter
    await page.press('[placeholder="Password"]', 'Enter');
    //await expect(page).toHaveURL('http://localhost/dolibarr/index.php?mainmenu=home');
    

    await page.click('#mainmenutd_project a div');
   
    // Click text=New lead or project
    await page.click('text=New lead or project');
    var j =1;
    for(var i = 1;i<5;i++){
        // Fill input[name="title"]
        var name = "project"+String(j);
        await page.fill('input[name="title"]', name);
        j++;

        // Click #select2-socid-container >> text=Select a third party
        await page.click('#select2-socid-container >> text=Select a third party');
        // Fill :nth-match(input[role="searchbox"], 2)
        var party = "party"+ String(Math.floor(Math.random()*(5)));
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
        var date2 = randomDate();
        await page.fill('input[name="projectstart"]', date2);

        await page.click('input[name="projectend"]');
        // Fill input[name="projectend"]
        var date1 = randomDate();
        await page.fill('input[name="projectend"]', date1);
        
        
        // Click text=Lead status ProspectionQualificationProposalNegociationWonLost >> span[role="presentation"]
        await page.click('text=Lead status ProspectionQualificationProposalNegociationWonLost >> span[role="presentation"]');
        // Click li[role="option"]:has-text("Proposal")
        l_list = ["Prospection", "Qualification", "Proposal", "Negociation", "Won", "Lost"];
        var ra2 = Math.floor(Math.random()*(6));
        await page.fill(':nth-match(input[role="searchbox"], 2)', l_list[ra2]);

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
        await expect(page).toHaveURL('http://localhost/dolibarr/projet/card.php?leftmenu=projects&action=create');
    }
});
*/

////third 
