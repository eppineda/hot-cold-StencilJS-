import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hc-text',
  styleUrl: 'hc-text.css',
  shadow: true,
})
export class HcText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
