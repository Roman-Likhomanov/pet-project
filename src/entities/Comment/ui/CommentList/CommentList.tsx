import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});
