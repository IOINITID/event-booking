import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import { InfoBanner } from './index';

// Types
import { InfoBannerProps } from './types';

export default {
  title: 'Components/InfoBanner',
  component: InfoBanner,
  argTypes: {},
} as ComponentMeta<typeof InfoBanner>;

const Template: ComponentStory<typeof InfoBanner> = (args) => <InfoBanner {...args} />;

export const Default = Template.bind({});
const DefaultInfoBannerArgs: InfoBannerProps = {
  type: 'events',
  title: 'Здесь пока пусто.',
  description: 'Создай любое мероприятие, и оно появится в этом списке!',
  buttonTitle: 'Создать мероприятие ⟶',
  onClick: action('onClick'),
};
Default.args = DefaultInfoBannerArgs;

export const Events = Template.bind({});
const EventsInfoBannerArgs: InfoBannerProps = {
  type: 'events',
  title: 'Здесь пока пусто.',
  description: 'Создай любое мероприятие, и оно появится в этом списке!',
  buttonTitle: 'Создать мероприятие ⟶',
  onClick: action('onClick'),
};
Events.args = EventsInfoBannerArgs;

export const Bookings = Template.bind({});
const BookingsInfoBannerArgs: InfoBannerProps = {
  type: 'bookings',
  title: 'Здесь пока пусто.',
  description: 'Забронируй любое мероприятие, и оно появится в этом списке!',
  buttonTitle: 'Забронировать мероприятие ⟶',
  onClick: action('onClick'),
};
Bookings.args = BookingsInfoBannerArgs;
