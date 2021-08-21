import { themes } from '@storybook/theming';

// Router
import { HashRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <HashRouter>
      <Story />
    </HashRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#f2f2f2',
      },
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal },
  },
};
