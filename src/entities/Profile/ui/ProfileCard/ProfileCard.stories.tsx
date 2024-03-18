import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/test/Avatar.jpeg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
};

export const Error = Template.bind({});
Error.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
