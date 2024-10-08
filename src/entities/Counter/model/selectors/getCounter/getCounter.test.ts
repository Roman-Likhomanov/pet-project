import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from '../getCounter/getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            count: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
