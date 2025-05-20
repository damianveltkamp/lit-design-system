import "./node_modules/@lit/reactive-element/reactive-element.js";
import { html as m } from "./node_modules/lit-html/lit-html.js";
import { LitElement as h } from "./node_modules/lit-element/lit-element.js";
import { customElement as p } from "./node_modules/@lit/reactive-element/decorators/custom-element.js";
import { state as u } from "./node_modules/@lit/reactive-element/decorators/state.js";
import { consume as l } from "./node_modules/@lit/context/lib/decorators/consume.js";
import { headerContext as b, headerCallbackContext as f } from "./src/components/header/header.context.js";
import { css as v } from "./node_modules/@lit/reactive-element/css-tag.js";
var g = Object.defineProperty, x = Object.getOwnPropertyDescriptor, i = (r, s, n, a) => {
  for (var e = a > 1 ? void 0 : a ? x(s, n) : s, o = r.length - 1, c; o >= 0; o--)
    (c = r[o]) && (e = (a ? c(s, n, e) : c(e)) || e);
  return a && e && g(s, n, e), e;
};
let t = class extends h {
  // Render the UI as a function of component state
  render() {
    return m`<div>
      <h1>
        ${this.context.user.firstName} ${this.context.user.lastName}
        ${this.context.user.age}
      </h1>
      <button
        @click=${{
      handleEvent: () => {
        this.callbacks.changeFirstname("Isabel"), this.callbacks.changeLastname("Hartog");
      }
    }}
      >
        Change user
      </button>
      <input
        @keypress=${{
      handleEvent: (r) => {
        this.callbacks.changeFirstname(r.target.value);
      }
    }}
      />
      <button
        @click=${{
      handleEvent: () => {
        this.callbacks.incrementAge();
      }
    }}
      >
        Increment age
      </button>
    </div>`;
  }
};
t.styles = v`
    .headerBase {
      background-color: red;
    }
  `;
i([
  l({ context: b, subscribe: !0 }),
  u()
], t.prototype, "context", 2);
i([
  l({ context: f, subscribe: !0 })
], t.prototype, "callbacks", 2);
t = i([
  p("bnt-user")
], t);
export {
  t as SimpleGreeting
};
