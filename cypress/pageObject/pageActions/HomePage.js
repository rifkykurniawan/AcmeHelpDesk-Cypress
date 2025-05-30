const locators = require('../../pageObject/pageElements/Locators.json')

export class HomePageActions {
    clickAllMenu() {
        cy.get(locators.HomePage.AllMenu).click()
    }
    clickOpenMenu() {
        cy.get(locators.HomePage.OpenMenu).click()
    }
    clickPendingMenu() {
        cy.get(locators.HomePage.PendingMenu).click()
    }
    clickClosedMenu() {
        cy.get(locators.HomePage.ClosedMenu).click()
    }
    isAllMenuDisplayed() {
        cy.get(locators.HomePage.AllMenu).should('be.visible')
    }
    isOpenMenuDisplayed() {
        cy.get(locators.HomePage.OpenMenu).should('be.visible')
    }
    isPendingMenuDisplayed() {
        cy.get(locators.HomePage.PendingMenu).should('be.visible')
    }
    isClosedMenuDisplayed() {
        cy.get(locators.HomePage.ClosedMenu).should('be.visible')
    }
    verifyStatusText(status){
        cy.get(locators.HomePage.ChatStatus).should('have.text', status)
    }
    clickFilter1(){
        cy.get(locators.HomePage.Filter1).click()
    }
    selectUser1(){
        cy.get(locators.HomePage.User1).click()
    }
}