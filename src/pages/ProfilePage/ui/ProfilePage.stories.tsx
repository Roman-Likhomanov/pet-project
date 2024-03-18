import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/test/Avatar.jpeg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Roman',
            lastname: 'Likhomanov111',
            age: 123,
            currency: Currency.USD,
            country: Country.RUSSIA,
            city: 'Moscow',
            username: 'admin',
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Roman',
            lastname: 'Likhomanov111',
            age: 123,
            currency: Currency.USD,
            country: Country.RUSSIA,
            city: 'Moscow',
            username: 'admin',
            avatar,
        },
    },
})];
