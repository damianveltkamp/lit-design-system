import { cva } from "class-variance-authority";
import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { consume, provide } from "@lit/context";
import {
  headerCallbackContext,
  headerContext,
  type HeaderContextCallbacks,
  type HeaderContextValue,
} from "./header.context.js";

@customElement("bnt-header-context")
export class HeaderContext extends LitElement {
  @provide({ context: headerContext }) context: HeaderContextValue = {
    user: {
      firstName: "Damian",
      lastName: "Veltkamp",
      age: 27,
    },
  };

  @provide({ context: headerCallbackContext })
  callbacks: HeaderContextCallbacks = {
    changeFirstname: (newFirstname) => {
      this.context = {
        user: {
          ...this.context.user,
          firstName: newFirstname,
        },
      };
    },
    changeLastname: (newLastname) => {
      this.context = {
        user: {
          ...this.context.user,
          lastName: newLastname,
        },
      };
    },
    incrementAge: () => {
      this.context = {
        user: {
          ...this.context.user,
          age: this.context.user.age + 1,
        },
      };
    },
  };

  override render() {
    return html`<slot></slot>`;
  }
}

@customElement("bnt-header")
export class Header extends LitElement {
  static override styles = css`
    .headerBase {
      background-color: red;
    }
  `;

  @consume({ context: headerContext, subscribe: true })
  @state()
  context!: HeaderContextValue;

  private headerStyles = cva("headerBase", {
    variants: {
      variant: {
        default: "",
      },
    },
  });

  // Render the UI as a function of component state
  override render() {
    return html`
      <header class=${this.headerStyles()}>
        <slot></slot>
        <h1>
          Route inside header.ts ${this.context.user.firstName}
          ${this.context.user.lastName} ${this.context.user.age}
        </h1>
      </header>
    `;
  }
}
