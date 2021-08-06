import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Button } from './index';

// Types
import { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
const DefaultButtonArgs: ButtonProps = {};
Default.args = DefaultButtonArgs;

export const Text = Template.bind({});
const TextButtonArgs: ButtonProps = {
  variant: 'text',
};
Text.args = TextButtonArgs;

export const Outlined = Template.bind({});
const OutlinedButtonArgs: ButtonProps = {
  variant: 'outlined',
};
Outlined.args = OutlinedButtonArgs;

export const Contained = Template.bind({});
const ContainedButtonArgs: ButtonProps = {
  variant: 'contained',
};
Contained.args = ContainedButtonArgs;
