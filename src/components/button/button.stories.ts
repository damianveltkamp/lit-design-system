import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./button.ts";

const meta: Meta = {
  component: "bnt-button",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html` <bnt-button
      @click=${{
        handleEvent: () => {
          console.log("THIS IS TRIGGERED NOW SEE");
        },
      }}
      variant="default"
      >Button text goes here</bnt-button
    >`,
};
