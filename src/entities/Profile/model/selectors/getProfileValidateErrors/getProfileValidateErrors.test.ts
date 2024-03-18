import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateError.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.SERVER_ERROR],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
