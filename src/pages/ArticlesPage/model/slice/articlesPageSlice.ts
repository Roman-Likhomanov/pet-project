import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlePageAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlePageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlePageAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: articlePageAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticlesList.fulfilled, (
            state,
            action: PayloadAction<Article[]>,
        ) => {
            state.isLoading = false;
            articlePageAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchArticlesList.rejected, (
            state,
            action,
        ) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
