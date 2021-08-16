import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import { Logo } from './index';
import { LogoProps } from './types';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
  <BrowserRouter>
    <Logo {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
const DefaultLogoArgs: LogoProps = {
  width: 210,
};
Default.args = DefaultLogoArgs;
