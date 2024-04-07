import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const article = {
            id: '1',
            title: 'Java Script news',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test('should work isLoading with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work isLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: '123',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('123');
    });
    test('should work error with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
