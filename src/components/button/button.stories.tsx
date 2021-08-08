import { action } from '@storybook/addon-actions';
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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
const DefaultButtonArgs: ButtonProps = {
  children: 'Button',
  onClick: action('onClick'),
};
Default.args = DefaultButtonArgs;

export const Text = Template.bind({});
const TextButtonArgs: ButtonProps = {
  variant: 'text',
  children: 'Button',
  onClick: action('onClick'),
};
Text.args = TextButtonArgs;

export const Outlined = Template.bind({});
const OutlinedButtonArgs: ButtonProps = {
  variant: 'outlined',
  children: 'Button',
  onClick: action('onClick'),
};
Outlined.args = OutlinedButtonArgs;

export const Contained = Template.bind({});
const ContainedButtonArgs: ButtonProps = {
  variant: 'contained',
  children: 'Button',
  onClick: action('onClick'),
};
Contained.args = ContainedButtonArgs;

export const Leaf = Template.bind({});
const LeafButtonArgs: ButtonProps = {
  variant: 'leaf',
  children: 'Button',
  onClick: action('onClick'),
};
Leaf.args = LeafButtonArgs;
