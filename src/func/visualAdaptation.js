export class VisualAdaptation {
    constructor(screenWidth, sideMenuWidth) {
        this.whichDeviceView = () => {
            return this.screenWidth > 768 ? "deskView" : "mobileView";
        };
        this.getConversationWidth = () => {
            return this.screenWidth - this.sideMenuWidth;
        };
        this.screenWidth = screenWidth;
        this.sideMenuWidth = sideMenuWidth;
    }
}
