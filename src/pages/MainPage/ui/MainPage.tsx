import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <Page>
            {t('Главная страница')}
            <Counter />
        </Page>
    );
};

export default MainPage;
