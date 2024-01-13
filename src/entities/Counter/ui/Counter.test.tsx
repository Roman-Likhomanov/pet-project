import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
    test('Test render', () => {
        ComponentRender(<Counter />, { initialState: { count: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        ComponentRender(<Counter />, { initialState: { count: { value: 10 } } });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        ComponentRender(<Counter />, { initialState: { count: { value: 10 } } });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
