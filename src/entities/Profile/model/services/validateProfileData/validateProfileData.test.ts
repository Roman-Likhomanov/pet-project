import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../../index';
import { validateProfileData } from '../validateProfileData/validateProfileData';

const data = {
    first: 'Roman',
    lastname: 'Likhomanov111',
    age: 123,
    currency: Currency.USD,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin',
};

describe('validateProfileData.test', () => {
    test('sucсess ', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
