import { Page, Locator } from '@playwright/test';

export class HomePage {
    private useCaseLink: Locator;
    private fintecsLink: Locator;

    constructor( private page: Page) {
        this.useCaseLink = page.getByRole('link', { name: 'Use Cases' });
        this.fintecsLink = page.getByRole('link', { name: 'Fintechs' });
    }

    async navigate () {
        await this.page.goto('/');

    }

    async navigateToFintechs() {
        //The task description says "click on Use Cases", but since this is a 
        //hover-triggered dropdown menu, I used hover insted of click.
        //to reveal the submenu
        await this.useCaseLink.hover();
        await this.fintecsLink.click();
    }

}
