import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from '../initArticlesPage/initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

jest.mock('URL', () => ({
    searchParams: {
        get: jest.fn(),
    },
}));

describe('initArticlesPage.test', () => {
    test('sucсess initArticlesPage', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                hasMore: true,
                _inited: false,
            },
        });

        (URL as any).searchParams?.get.mockReturnValueOnce('value');

        await thunk.callThunk((new URL('?key=value', 'http://example.com')).searchParams);

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
        // expect((URL as any).searchParams?.get)?.toHaveBeenCalledWith('key');
    });

    test('initArticlesPage not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                hasMore: false,
                _inited: true,
            },
        });

        await thunk.callThunk((new URL('?key=value', 'http://example.com')).searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
