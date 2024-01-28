import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'feature/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    login: { username: 'test', password: '123' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
    login: { username: 'test', password: '123', error: 'error' },
})];
