import Variants from "../components/button/button.types.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "bnt-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        variant: Variants;
      };
    }
  }
}
