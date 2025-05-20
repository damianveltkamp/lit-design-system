import { cva as d } from "./node_modules/class-variance-authority/dist/index.js";
import "./node_modules/@lit/reactive-element/reactive-element.js";
import { html as h } from "./node_modules/lit-html/lit-html.js";
import { LitElement as l } from "./node_modules/lit-element/lit-element.js";
import { customElement as u } from "./node_modules/@lit/reactive-element/decorators/custom-element.js";
import { state as f } from "./node_modules/@lit/reactive-element/decorators/state.js";
import { provide as p } from "./node_modules/@lit/context/lib/decorators/provide.js";
import { consume as b } from "./node_modules/@lit/context/lib/decorators/consume.js";
import { headerContext as x, headerCallbackContext as g } from "./src/components/header/header.context.js";
import { css as v } from "./node_modules/@lit/reactive-element/css-tag.js";
var y = Object.defineProperty, N = Object.getOwnPropertyDescriptor, r = (t, s, c, a) => {
  for (var e = a > 1 ? void 0 : a ? N(s, c) : s, i = t.length - 1, m; i >= 0; i--)
    (m = t[i]) && (e = (a ? m(s, c, e) : m(e)) || e);
  return a && e && y(s, c, e), e;
};
let o = class extends l {
  constructor() {
    super(...arguments), this.context = {
      user: {
        firstName: "Damian",
        lastName: "Veltkamp",
        age: 27
      }
    }, this.callbacks = {
      changeFirstname: (t) => {
        this.context = {
          user: {
            ...this.context.user,
            firstName: t
          }
        };
      },
      changeLastname: (t) => {
        this.context = {
          user: {
            ...this.context.user,
            lastName: t
          }
        };
      },
      incrementAge: () => {
        this.context = {
          user: {
            ...this.context.user,
            age: this.context.user.age + 1
          }
        };
      }
    };
  }
  render() {
    return h`<slot></slot>`;
  }
};
r([
  p({ context: x })
], o.prototype, "context", 2);
r([
  p({ context: g })
], o.prototype, "callbacks", 2);
o = r([
  u("bnt-header-context")
], o);
let n = class extends l {
  constructor() {
    super(...arguments), this.headerStyles = d("headerBase", {
      variants: {
        variant: {
          default: ""
        }
      }
    });
  }
  // Render the UI as a function of component state
  render() {
    return h`
      <header class=${this.headerStyles()}>
        <slot></slot>
        <h1>
          Route inside header.ts ${this.context.user.firstName}
          ${this.context.user.lastName} ${this.context.user.age}
        </h1>
      </header>
    `;
  }
};
n.styles = v`
    .headerBase {
      background-color: red;
    }
  `;
r([
  b({ context: x, subscribe: !0 }),
  f()
], n.prototype, "context", 2);
n = r([
  u("bnt-header")
], n);
export {
  n as Header,
  o as HeaderContext
};
