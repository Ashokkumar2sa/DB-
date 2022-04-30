const playwright = require('playwright');


(async () => {

    const browser = await playwright["chromium"].launch({
        headless: false
    });

    //context
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost/index.php?mainmenu=home&leftmenu=home');
    await Promise.all([
      page.waitForNavigation(/*{ url: 'http://0.0.0.0:8000/login#login' }*/),
      page.click('text=Login')
    ]);
    await page.locator('[placeholder="Login"]').click();
    await page.locator('[placeholder="Login"]').fill('Ashok');
    await page.locator('[placeholder="Password"]').click();
    await page.locator('[placeholder="Password"]').fill('Ashok2sa-');
    await page.locator('[placeholder="Password"]').press('Enter');
    await page.click('text=Members');
    //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/index.php?mainmenu=members&leftmenu=');
    // Click :nth-match(:text("New"), 3)
    await page.click(':nth-match(:text("New"), 3)');
    //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/type.php?leftmenu=setup&mainmenu=members&action=create');
    for(var i=1344;i<2000;i++){
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
        
        await page.click('//html/body/div[3]/div[2]/div/form/div[2]/input[1]');
        //await expect(page).toHaveURL('http://localhost/dolibarr/adherents/type.php');

        await page.click('text=Members');
        await page.click(':nth-match(:text("New"), 3)');
    }
    
     
})();

