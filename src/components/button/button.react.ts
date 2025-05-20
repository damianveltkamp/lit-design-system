import * as React from "react";
import { createComponent } from "@lit/react";
import { Button } from "./button.js";

export const MyElementComponent = createComponent({
  tagName: "bnt-button",
  elementClass: Button,
  react: React,
});
