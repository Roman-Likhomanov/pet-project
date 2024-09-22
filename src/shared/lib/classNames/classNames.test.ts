import { classNames } from './classNames';

describe('className', () => {
    test('with only first param', () => {
        expect(classNames('test')).toBe('test');
    });

    test('with additional param', () => {
        expect(classNames('test', {}, ['cls1', 'cls2'])).toBe('test cls1 cls2');
    });

    test('with mods', () => {
        expect(classNames('test', { hovered: true }, ['cls1', 'cls2']))
            .toBe('test cls1 cls2 hovered');
    });

    test('with mods false', () => {
        expect(classNames('test', { hovered: true, scroll: false }, ['cls1', 'cls2']))
            .toBe('test cls1 cls2 hovered');
    });

    test('with mods undefined', () => {
        expect(classNames('test', { hovered: true, scroll: undefined }, ['cls1', 'cls2']))
            .toBe('test cls1 cls2 hovered');
    });
});
