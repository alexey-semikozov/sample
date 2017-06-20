import { Selector } from 'testcafe';
import { expect } from 'chai';

const MAIN_PAGE = 'http://localhost:3000'

fixture`Sample`.beforeEach(async (t) => {
    await t.setNativeDialogHandler(() => true);
    await t.navigateTo(MAIN_PAGE);
});

test('main', async (t) => {
    const text = await Selector('div').textContent;
    expect(text).to.be.equal('Hello World');
});
