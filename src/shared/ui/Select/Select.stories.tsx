import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '../Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '123', content: '123' },
        { value: '345', content: '345' },
    ],
};
