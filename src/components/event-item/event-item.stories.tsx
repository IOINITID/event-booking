import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { EventItem } from './index';

// Types
import { EventItemProps } from './types';

export default {
  title: 'Components/EventItem',
  component: EventItem,
  argTypes: {},
} as ComponentMeta<typeof EventItem>;

const Template: ComponentStory<typeof EventItem> = (args) => <EventItem {...args} />;

export const Default = Template.bind({});
const DefaultEventItemArgs: EventItemProps = {
  event: {
    _id: '1',
    title: 'Some event title',
    description: 'Some event description',
    date: new Date().toLocaleString(),
    price: '1000',
    location: 'Some event location',
    image:
      'https://res.cloudinary.com/ioinitid/image/upload/f_jpg,q_75/v1628346662/event-booking/atgovsql1eylvlnwklyb.jpg',
    creator: {
      _id: '1',
      email: 'user@mail.com',
    },
  },
  onDetailClick: () => null,
};
Default.args = DefaultEventItemArgs;
