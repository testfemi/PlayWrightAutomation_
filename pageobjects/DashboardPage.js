class DashboardPage {
  constructor(page) {
    this.page = page;
    this.signInButton = page.locator("button:has-text('Sign In')");
  }

  async navigateToOrders() {
    await this.signInbutton.click();
  }

  async navigateToButton(buttonText) {
    const buttonLocator = this.page.locator(`button:has-text("${buttonText}")`);
    await buttonLocator.click();
    await this.closeErrorPopupIfVisible();
  }

  async fillInProductDetails(Name, Description, Price) {
    const inputFields = [
      { attribute: "product_Name", value: Name },
      { attribute: "product_Description", value: Description },
      { attribute: "product_Price", value: Price },
    ];

    for (const field of inputFields) {
      const inputLocator = this.page.locator(
        `[data-test-subj="${field.attribute}"]`
      );
      await inputLocator.clear();
      await inputLocator.fill(field.value);
    }
  }

  async searchProduct(searchText) {
    const searchInputLocator = this.page.locator(
      'input[placeholder="Search..."]'
    );

    // Type the search text into the search input box
    await searchInputLocator.type(searchText);
  }

  async selectFirstItemInList() {
    await this.page.keyboard.press("Enter");
    // Simulate pressing the "Escape" key to clear the search box
    await this.page.keyboard.press("Escape");

    const elementLocator = this.page.locator(
      "div.euiText.css-11139k5-euiText-m-euiTextAlign-left strong"
    );
    const firstElement = await elementLocator.first();

    // Click the first matching element
    await firstElement.click();
  }

  async navigateToButtons(buttonText, maxAttempts = 5) {
    const buttonLocator = this.page.locator(`button:has-text("${buttonText}")`);

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        await buttonLocator.click();
       await this.closeErrorPopupIfVisible();
        break; // Click succeeded, exit the loop
      } catch (error) {
        if (attempt === maxAttempts) {
          throw error; // Max attempts reached, re-throw the error
        }
        await this.page.waitForTimeout(500); // Wait for 500ms before retrying
      }
    }
  }

  async closeErrorPopupIfVisible() {
    const errorPopup = this.page.locator("#error");
    if (await errorPopup.isVisible()) {
      // Close the error popup
      const closeButton = this.page.locator(
        'button[data-test-subj="toastCloseButton"]'
      );
      await closeButton.click();
    }
  }
}

module.exports = { DashboardPage };
