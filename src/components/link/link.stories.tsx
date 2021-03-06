import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import { Link } from './index';

// Types
import { LinkProps } from './types';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
const DefaultLinkArgs: LinkProps = {
  to: '/',
  children: 'Link',
  onClick: action('onClick'),
};
Default.args = DefaultLinkArgs;

export const Text = Template.bind({});
const TextLinkArgs: LinkProps = {
  to: '/',
  variant: 'text',
  children: 'Link',
  onClick: action('onClick'),
};
Text.args = TextLinkArgs;

export const Outlined = Template.bind({});
const OutlinedLinkArgs: LinkProps = {
  to: '/',
  variant: 'outlined',
  children: 'Link',
  onClick: action('onClick'),
};
Outlined.args = OutlinedLinkArgs;

export const Contained = Template.bind({});
const ContainedLinkArgs: LinkProps = {
  to: '/',
  variant: 'contained',
  children: 'Link',
  onClick: action('onClick'),
};
Contained.args = ContainedLinkArgs;
