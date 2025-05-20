import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "../button/button.ts";
import "./header.ts";
import "../user/user.ts";

const meta: Meta = {
  component: "bnt-header",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <bnt-header-context>
      <bnt-header>
        <bnt-user>Button text goes here</bnt-user>
      </bnt-header>
    </bnt-header-context>
  `,
};
