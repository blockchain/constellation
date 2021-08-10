import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Nature } from './Button';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    nature: { options: Object.values(Nature) }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  nature: Nature.PRIMARY,
  children: <span>hello world!</span>
};
