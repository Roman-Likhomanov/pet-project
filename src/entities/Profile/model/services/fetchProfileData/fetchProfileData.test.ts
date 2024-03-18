import axios from 'axios';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from 'entities/Profile';

describe('fetchProfileData.test', () => {
    test('sucсess fetchProfileData', async () => {
        const data = {
            first: 'Roman',
            lastname: 'Likhomanov111',
            age: 123,
            currency: Currency.USD,
            country: Country.RUSSIA,
            city: 'Moscow',
            username: 'admin',
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetchProfileData', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
