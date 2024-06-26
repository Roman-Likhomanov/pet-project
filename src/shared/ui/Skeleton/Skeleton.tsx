import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}

export const Skeleton = memo(({
    className, height, width, border,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
