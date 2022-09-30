describe('Add new skill', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should add a new skill', async () => {
    await element(by.id('new-skill')).typeText('Javascript');
    await element(by.id('add-button')).tap();
    await expect(element(by.id('skill-list'))).toBeVisible();
  });
});
