import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    form?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstName?: (value?: string) => void,
    onChangeLastName?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (currency: Currency) => void,
    onChangeCountry?: (country: Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, form, isLoading, error, onChangeFirstName,
        onChangeLastName, onChangeAge, onChangeCity, onChangeUsername,
        onChangeAvatar, onChangeCurrency, onChangeCountry, readonly,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке')}
                    text={t('Попробуйте обновить')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {form?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={form?.avatar} />
                    </div>
                )}
                <Input
                    readonly={readonly}
                    value={form?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                />
                <Input
                    readonly={readonly}
                    value={form?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastName}
                />
                <Input
                    readonly={readonly}
                    value={form?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                />
                <Input
                    readonly={readonly}
                    value={form?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={onChangeCity}
                />
                <Input
                    readonly={readonly}
                    value={form?.username}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                />
                <Input
                    readonly={readonly}
                    value={form?.avatar}
                    placeholder={t('Ваш аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={cls.input}
                    value={form?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={form?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>

        </div>
    );
};
