const { When, Then, Given } = require("@cucumber/cucumber");
const { POManager } = require("../../pageobjects/POManager");
const { expect } = require("@playwright/test");
const playwright = require("@playwright/test");

Given("I access the Nexudus URL ", async function () {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTo();
});

Given(
  "I log in with valid credentials {string} and {string}",
  { timeout: 100 * 1000 },
  async function (username, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.validLogin(username, password);
  }
);

When(
  "I navigate to {string}",
  { timeout: 100 * 1000 },
  async function (productsPage) {
    await this.page.goto("https://dashboard.nexudus.com" + productsPage);
  }
);

When(
  "I click on the {string} button",
  { timeout: 100 * 1000 },
  async function (buttonText) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.navigateToButton(buttonText, 5); // Retry clicking 5 times
  }
);

When(
  "I fill in the following details: {string} {string} {string}",
  { timeout: 100 * 1000 },
  async function (Product_name, Product_description, Unit_price) {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.fillInProductDetails(
      Product_name,
      Product_description,
      Unit_price
    );
  }
);

Then(
  "I search for {string} to ensure it is the first result",
  { timeout: 100 * 1000 },
  async function (searchText) {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProduct(searchText);
  }
);

Then(
  "I select the first item in the list",
  { timeout: 100 * 1000 },
  async function () {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.selectFirstItemInList();
  }
);

Then(
  "I confirm the login succeeds and I am presented with the dashboard home page",
  { timeout: 100 * 1000 },
  async function () {
    // You can use a locator to find an element unique to the dashboard page
    const dashboardLocator = this.page.locator(
      'span.eui-textTruncate:has-text("Dashboard")'
    );
    // Wait for the dashboard element to be visible
    await dashboardLocator.waitFor({ state: "visible" });
    // Verify if the element is present, indicating a successful login
    const isDashboardPresent = await dashboardLocator.isVisible();
    expect(isDashboardPresent).toBeTruthy();
  }
);

Then(
  "I confirm that {string} product is no longer available",
  { timeout: 100 * 1000 },
  async function (searchT) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProduct(searchT);
    await this.dashboardPage.selectFirstItemInList();
    //Used More specific XPath locator to find the element with the text "No items found"
    const element = await this.page.locator('span:has-text("No items found")');
    // Check if the element is visible or not visible using Playwright's expect
    if (await expect(element).not.toBeVisible()) {
      console.log(
        'Product is no longer available --> with text "No items found" is not visible for product "${searchT}"'
      );
    } else {
      console.log(
        'Product is no longer available -->  with text "No items found" is visible for product "${searchT}"'
      );
    }
  }
);
