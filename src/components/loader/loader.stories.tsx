import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Loader } from './index';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
const DefaultLoaderArgs = {};
Default.args = DefaultLoaderArgs;
