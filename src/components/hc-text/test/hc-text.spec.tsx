import { newSpecPage } from '@stencil/core/testing';
import { HcText } from './hc-text';

describe('hc-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HcText],
      html: `<hc-text></hc-text>`,
    });
    expect(page.root).toEqualHtml(`
      <hc-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hc-text>
    `);
  });
});
