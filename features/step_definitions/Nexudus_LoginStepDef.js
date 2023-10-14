const { When, Then, Given } = require("@cucumber/cucumber");
const { POManager } = require("../../pageobjects/POManager");
const { expect } = require("@playwright/test");
const playwright = require("@playwright/test");

//To Do 14/10/2023- Femi - To update and get infomation from config file
Given("I access the Nexudus URL", { timeout: 100 * 1000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTo();
});

/*
To Do 14/10/2023- Femi - To update to use the same logic as -- And I fill in the following details: "<Product_name>" "<Product_description>" "<Unit_price>"
                            Or To pick username and password from the config file  */

When(
  "I type {string} as the email and {string} as the passwword",
  { timeout: 100 * 1000 },
  async function (username, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.validLogin(username, password);
  }
);

/*
//Done - updated to use general logic ---  When I click on the "Sign In" button
When('I click the Sign In button', async function () {
      await this.page.keyboard.press('Tab');
      await this.page.keyboard.press('Tab');
      await this.page.keyboard.press("Enter");

      //Or
    //  await signInButton.click();
    //  const loginPage = this.poManager.getLoginPage();
    //  await loginPage.signIn();

});
    */

Then(
  "I confirm a clear error message is presented on the screen",
  { timeout: 100 * 1000 },
  async function () {
    //Write code here that turns the phrase above into concrete actions
    // console.log(await this.page.locator("[class='euiText css-5okgsa-euiText-s-euiTextColor-default-euiCallOut__description']").textContent());
    await expect(
      this.page.locator(
        "[class='euiText css-5okgsa-euiText-s-euiTextColor-default-euiCallOut__description']"
      )
    ).toContainText("The email or password is incorrect.");
  }
);
