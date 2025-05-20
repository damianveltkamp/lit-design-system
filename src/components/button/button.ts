import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Variants } from "./button.types.js";

@customElement("bnt-button")
export class Button extends LitElement {
  // TODO: figure out how to use scss instead of the css lit function
  static override styles = css`
    .button {
      color: blue;
      border: 10px solid red;
      background-color: pink;
    }
  `;

  @property({ type: String }) variant: Variants = "default";

  // Render the UI as a function of component state
  override render() {
    return html`<button class="button">
      <slot></slot>
    </button>`;
  }
}
