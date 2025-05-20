import { LitElement } from 'lit';
import { HeaderContextCallbacks, HeaderContextValue } from '../header/header.context.js';
export declare class SimpleGreeting extends LitElement {
    static styles: import('lit').CSSResult;
    context: HeaderContextValue;
    callbacks: HeaderContextCallbacks;
    render(): import('lit-html').TemplateResult<1>;
}
