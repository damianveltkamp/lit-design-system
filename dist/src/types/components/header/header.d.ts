import { LitElement } from 'lit';
import { HeaderContextCallbacks, HeaderContextValue } from './header.context.js';
export declare class HeaderContext extends LitElement {
    context: HeaderContextValue;
    callbacks: HeaderContextCallbacks;
    render(): import('lit-html').TemplateResult<1>;
}
export declare class Header extends LitElement {
    static styles: import('lit').CSSResult;
    context: HeaderContextValue;
    private headerStyles;
    render(): import('lit-html').TemplateResult<1>;
}
