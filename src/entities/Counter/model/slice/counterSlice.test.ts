import { counterReducer, CounterSchema } from '../../index';
import { counterActions } from '../slice/counterSlice';

describe('counterSlice.test', () => {
    test('should be increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
});

describe('counterSlice.test', () => {
    test('should be decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
});

describe('counterSlice.test', () => {
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
