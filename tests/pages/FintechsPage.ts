import { Page } from '@playwright/test';

export class FintechsPage {

    constructor( private page: Page) {}

async goto() {
    await this.page.goto('/fintechs/');
}

async getCookiebotConfig() {
    const [response] = await Promise.all([
        this.page.waitForResponse(res => res.url().includes('cookiebot.com') && res.url().includes('settings.json')),
        this.page.goto('/fintechs/')
    ]);
    return { status: response.status(), body: await response.json() };
    }
}