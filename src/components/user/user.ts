import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { consume } from "@lit/context";
import {
  headerCallbackContext,
  headerContext,
  type HeaderContextCallbacks,
  type HeaderContextValue,
} from "../header/header.context.js";
import type { ChangeEvent } from "../../helpers/change-event.ts";

@customElement("bnt-user")
export class SimpleGreeting extends LitElement {
  static override styles = css`
    .headerBase {
      background-color: red;
    }
  `;

  @consume({ context: headerContext, subscribe: true })
  @state()
  context!: HeaderContextValue;

  @consume({ context: headerCallbackContext, subscribe: true })
  callbacks!: HeaderContextCallbacks;

  // Render the UI as a function of component state
  override render() {
    return html`<div>
      <h1>
        ${this.context.user.firstName} ${this.context.user.lastName}
        ${this.context.user.age}
      </h1>
      <button
        @click=${{
          handleEvent: () => {
            this.callbacks.changeFirstname("Isabel");
            this.callbacks.changeLastname("Hartog");
          },
        }}
      >
        Change user
      </button>
      <input
        @keypress=${{
          handleEvent: (event: ChangeEvent<HTMLInputElement>) => {
            this.callbacks.changeFirstname(event.target.value);
          },
        }}
      />
      <button
        @click=${{
          handleEvent: () => {
            this.callbacks.incrementAge();
          },
        }}
      >
        Increment age
      </button>
    </div>`;
  }
}
