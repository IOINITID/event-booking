import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Link } from './index';

// Router
import { BrowserRouter } from 'react-router-dom';

// Types
import { LinkProps } from './types';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <BrowserRouter>
    <Link {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
const DefaultLinkArgs: LinkProps = {
  to: '/',
  children: 'Link',
};
Default.args = DefaultLinkArgs;

export const Text = Template.bind({});
const TextLinkArgs: LinkProps = {
  to: '/',
  variant: 'text',
  children: 'Link',
};
Text.args = TextLinkArgs;

export const Outlined = Template.bind({});
const OutlinedLinkArgs: LinkProps = {
  to: '/',
  variant: 'outlined',
  children: 'Link',
};
Outlined.args = OutlinedLinkArgs;

export const Contained = Template.bind({});
const ContainedLinkArgs: LinkProps = {
  to: '/',
  variant: 'contained',
  children: 'Link',
};
Contained.args = ContainedLinkArgs;
