class StartPage {

  get loadingScreen() { 
    return $('//android.widget.TextView[@text="Zakaz uczestnictwa w grze hazardowej dla osób poniżej 18 roku życia"]');
  }
  get acceptCookieButton() { 
    return $('//android.widget.Button[@resource-id="cz.greep.sts:id/btn_accept_cookies"]');
  }
  get gameChangerModalButton() { 
    return $('//android.widget.TextView[@text="OK, zamknij"]');
  }

  async checkLoadingScreen(): Promise<void> {
    await expect((this.loadingScreen as any).toBeDisplayed())
  }

  async acceptCookies(): Promise<void> {
    await expect((this.acceptCookieButton as any).toBeDisplayed())
    await this.acceptCookieButton.click();
  }

  async gameChangerModal(): Promise<void> {
    await expect((this.gameChangerModalButton as any).toBeDisplayed())
    await this.gameChangerModalButton.click();
  }
}
export default new StartPage();

