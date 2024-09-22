import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../../index';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (count: CounterSchema) => count.value,
);
