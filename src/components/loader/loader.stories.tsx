import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Loader } from './index';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    color: { control: { type: 'color' } },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
const DefaultButtonArgs = {
  color: '#ef4723',
  duration: 1.2,
};
Default.args = DefaultButtonArgs;
