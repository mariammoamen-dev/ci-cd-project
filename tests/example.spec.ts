import { test, expect } from "@playwright/test";

test.describe("Login Tests", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
  });
  test("Login with valid creds", async ({ page }) => {
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
    await expect(page.locator(".post-title")).toHaveText(
      "Logged In Successfully"
    );
    expect(page.url()).toContain(
      "practicetestautomation.com/logged-in-successfully/"
    );
    await expect(page.getByRole("button", { name: "Log out" })).toBeVisible();
  });

  test("Login with invalid creds  - Username ", async ({ page }) => {
    await page.locator("#username").fill("invalidUser");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
    await expect(page.locator("#error")).toHaveText(
      "Your username is invalid!"
    );
  });
  test("Login with invalid creds  - Password ", async ({ page }) => {
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("invalidPassword");
    await page.locator("#submit").click();
    await expect(page.locator("#error")).toHaveText(
      "Your password is invalid!"
    );
  });
});
