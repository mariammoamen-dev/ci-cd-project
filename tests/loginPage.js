class LoginPage {
    constructor(page) {
        this.page = page;
    }
    // Method to enter username
    username() {
        return this.page.locator("#username");
        // Add logic to input username
    }

    // Method to enter password
    password() {
        return this.page.locator("#password")
    }

    // Method to click the login button
    clickLoginButton() {
        return this.page.locator("#submit")
    }

    // Method to validate login success
    validateLoginSuccess() {
        return this.page.locator(".post-title")
    }
    validateErrorMessage() {    
        return this.page.locator("#error");
    }
    logoutButton() {
        return this.page.getByRole('link', { name: 'Log out' });
    }
}

module.exports = LoginPage;