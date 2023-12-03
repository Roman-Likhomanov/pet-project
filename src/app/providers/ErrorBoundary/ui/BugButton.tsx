import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';

// тестовый компонент
export const BugButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};
