import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hc-text',
  styleUrl: 'hc-text.css',
  shadow: true,
})
export class HcText {
  @Prop() description: string;
  @Prop() value: number;
  @Prop() range: Object; // todo - new class needed to map numbers to colors

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
