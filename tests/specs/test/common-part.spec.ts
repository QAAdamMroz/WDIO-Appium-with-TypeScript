
import allureReporter from '@wdio/allure-reporter'
import StartPage from "../../../pageobjects/mobile/test/start.page";
class stsTests
{
  async test(): Promise<void> {
    
describe("Android proof of skill suit", () => {
  it("Case 1. Check loading screen", async () => {
    StartPage.checkLoadingScreen();
  })
  it("Case 2. Check loading screen", async () => {
    StartPage.checkLoadingScreen();
  })
  it("Case 3. Check is game changer modal dispalyed", async () => {
    StartPage.gameChangerModal();
  })
});
  }
}
export default new stsTests();