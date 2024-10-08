import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/ui/Button';
import CopyIcon from '../../assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
