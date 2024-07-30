import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlePageHasMore,
    getArticlePageIsloading,
    getArticlePageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const isLoading = getArticlePageIsloading(getState());
            const page = getArticlePageNum(getState());
            const hasMore = getArticlePageHasMore(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
