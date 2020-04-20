import { newE2EPage } from '@stencil/core/testing';

describe('hc-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hc-text></hc-text>');

    const element = await page.find('hc-text');
    expect(element).toHaveClass('hydrated');
  });
});
