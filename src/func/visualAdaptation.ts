export class VisualAdaptation {
  screenWidth: number;
  sideMenuWidth: number;

  constructor(screenWidth: number, sideMenuWidth: number) {
    this.screenWidth = screenWidth;
    this.sideMenuWidth = sideMenuWidth;
  }

  whichDeviceView = () => {
    return this.screenWidth > 768 ? "deskView" : "mobileView";
  };

  getConversationWidth = () => {
    return this.screenWidth - this.sideMenuWidth;
  };
}
