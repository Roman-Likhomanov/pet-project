import {
    profileActions, profileReducer, ProfileSchema, updateProfileData, ValidateProfileError,
} from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const data = {
    first: 'Roman',
    lastname: 'Likhomanov111',
    age: 123,
    currency: Currency.USD,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });

    test('test set cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateError: undefined,
                data,
                form: data,
            });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '888' })))
            .toEqual({
                form: { username: '888' },
            });
    });

    test('test updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateError: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateError: undefined,
            });
    });

    test('test updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateError: undefined,
                readonly: true,
                form: data,
                data,
                error: undefined,
            });
    });
});
