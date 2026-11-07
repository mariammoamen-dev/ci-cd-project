import { test, expect } from "@playwright/test";
import LoginPage from "../tests/loginPage";
const loginData = require("../tests/loginData.json");

test.describe("Login Tests", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
  });
  test("Login with valid creds", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.username().fill(loginData.username);
    await loginPage.password().fill(loginData.password);
    await loginPage.clickLoginButton().click();
    await expect(loginPage.validateLoginSuccess()).toHaveText(
      loginData.loginSuccessMessage
    );
    expect(page.url()).toContain(loginData.url);
    await expect(loginPage.logoutButton()).toBeVisible();
  });

  test("Login with invalid creds  - Username ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.username().fill(loginData.invalidUsername);
    await loginPage.password().fill(loginData.password);
    await loginPage.clickLoginButton().click();
    await expect(loginPage.validateErrorMessage()).toHaveText(
      loginData.usernameErrorMessage
    );
  });
  test("Login with invalid creds  - Password ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.username().fill(loginData.username);
    await loginPage.password().fill(loginData.invalidPassword);
    await loginPage.clickLoginButton().click();
    await expect(loginPage.validateErrorMessage()).toHaveText(
      loginData.passwordErrorMessage
    );
  });
});
