import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOptions<T>[]
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

export const Select = <T extends string> ({
    className, label, options, value, onChange, readonly,
}: SelectProps<T>) => {
    const { t } = useTranslation();

    const mods: Mods = {};

    const SelectOptions = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.currentTarget.value as T);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {SelectOptions}
            </select>
        </div>
    );
};
