import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { FintechsPage } from './pages/FintechsPage';

// Both tests are intentionally independent. The API test navigates directly
// to /fintechs/ so it can run even if the UI navigation test fails.

test.describe('Paynetics website test', () => {
    let homePage: HomePage;
    let fintechsPage: FintechsPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        fintechsPage = new FintechsPage(page);
    });

    test('Navigate to Fintechs page via main menu', async ({ page } )=> {
        console.log('Navitegate to Fintechs page via main menu');
        await homePage.navigate();

        console.log('Hover over Use Cases and click on Fintechs');
        await homePage.navigateToFintechs();

        console.log('Verify that the URL is correct');
        await expect(page).toHaveURL('/fintechs/');
    });

    test('Validate cookiebot configuration', async () => {
        console.log('Validate cookiebot configuration on Fintechs page');
        const config = await fintechsPage.getCookiebotConfig();
        expect(config.status).toBe(200);
        expect(config.body.widget.enabled).toBe(false);
        expect(config.body.widget.position.position).toBe('bottom-left');
        expect(config.body.widget.content.default).toBe('en');
    });
});