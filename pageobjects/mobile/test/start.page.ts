class StartPage {

  get loginButton() { 
    return $('//android.widget.Button[@content-desc="ZALOGUJ"]');
  }
  async openLoginModal(): Promise<void> {
    await this.loginButton.click();
  }
}
export default new StartPage();

