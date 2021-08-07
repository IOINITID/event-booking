import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import { Event } from './index';

// Types
import { EventProps } from './types';

export default {
  title: 'Components/Event',
  component: Event,
  argTypes: {
    title: {},
    date: { control: { type: 'date' } },
    price: {},
    image: {},
    onDetailClick: {},
  },
} as ComponentMeta<typeof Event>;

const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />;

export const Default = Template.bind({});
const DefaultEventArgs: EventProps = {
  title: 'Event title',
  date: new Date().toISOString(),
  price: '1000',
  image:
    'https://res.cloudinary.com/ioinitid/image/upload/f_jpg,q_75/v1628346662/event-booking/atgovsql1eylvlnwklyb.jpg',
  onDetailClick: action('onDetailClick'),
};
Default.args = DefaultEventArgs;
