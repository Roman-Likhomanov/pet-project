import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            count: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
