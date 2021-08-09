import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import { Modal } from './index';

// Types
import { ModalProps } from './types';

// Additional
import { css } from '@emotion/css';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
const DefaultModalArgs: ModalProps = {
  width: 592,
  isOpen: true,
  children: (
    <div
      className={css`
        display: grid;
        align-items: center;
        padding: 16px;
      `}
    >
      <h2>Some modal title</h2>
      <p>Some description</p>
    </div>
  ),
  cancelButton: {
    title: 'Cancel button',
    onClick: action('onClick'),
  },
  confirmButton: {
    title: 'Confirm button',
    onClick: action('onClick'),
  },
};
Default.args = DefaultModalArgs;
