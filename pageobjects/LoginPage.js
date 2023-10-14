class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInbutton = page.locator(
      "[class='css-1bascr2-euiButtonDisplayContent']"
    );
    this.userName = page.locator("[name='Email']");
    this.password = page.locator("[name='Password']");
    const { expect } = require("jest");
  }

  async goTo() {
    await this.page.goto("https://dashboard.nexudus.com");
  }

  async validLogin(username, password) {
    await this.userName.type(username);
    await this.password.type(password);
  }

  async signIn() {
    await signInButton.waitFor({ state: "visible" });
    await signInButton.click();
  }
}
module.exports = { LoginPage };
