// import { it } from "mocha"
import { HomePageActions } from "../pageObject/pageActions/HomePage"

const homePageActions = new HomePageActions()

describe('Home Page', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('https://marmelab.com/react-admin-helpdesk/#/tickets')
    })
    it('Verify Home Page', () => {
        homePageActions.isAllMenuDisplayed()
        homePageActions.isOpenMenuDisplayed()
        homePageActions.isPendingMenuDisplayed()
        homePageActions.isClosedMenuDisplayed()
    })
    it('Verify click on All Menu', () => {
        homePageActions.clickAllMenu()
        homePageActions.clickOpenMenu()
        homePageActions.clickPendingMenu()
        homePageActions.clickClosedMenu()
    })
    it('Verify List Status on Open Menu', () => {
        homePageActions.clickOpenMenu()
        homePageActions.verifyStatusText('open')
    })
    it('Verify List Status on Pending Menu', () => {
        homePageActions.clickPendingMenu()
        homePageActions.verifyStatusText('pending')
    })
    it('Verify List Status on Closed Menu', () => {
        homePageActions.clickClosedMenu()
        homePageActions.verifyStatusText('closed')
    })
    it ('Click Filter', () => {
        homePageActions.clickFilter1()
        homePageActions.selectUser1()
    })

})