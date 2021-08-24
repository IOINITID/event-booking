import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Logo } from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
const DefaultLogoArgs = {};
Default.args = DefaultLogoArgs;
