import React from "react";
import {Meta, Story} from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃" };


export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary 😇" };