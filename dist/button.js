import "./node_modules/@lit/reactive-element/reactive-element.js";
import { html as u } from "./node_modules/lit-html/lit-html.js";
import { LitElement as a } from "./node_modules/lit-element/lit-element.js";
import { customElement as i } from "./node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as b } from "./node_modules/@lit/reactive-element/decorators/property.js";
import { css as c } from "./node_modules/@lit/reactive-element/css-tag.js";
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, m = (l, r, s, o) => {
  for (var t = o > 1 ? void 0 : o ? v(r, s) : r, n = l.length - 1, p; n >= 0; n--)
    (p = l[n]) && (t = (o ? p(r, s, t) : p(t)) || t);
  return o && t && f(r, s, t), t;
};
let e = class extends a {
  constructor() {
    super(...arguments), this.variant = "default";
  }
  // Render the UI as a function of component state
  render() {
    return u`<button class="button">
      <slot></slot>
    </button>`;
  }
};
e.styles = c`
    .button {
      color: blue;
      border: 10px solid red;
      background-color: pink;
    }
  `;
m([
  b({ type: String })
], e.prototype, "variant", 2);
e = m([
  i("bnt-button")
], e);
export {
  e as Button
};
