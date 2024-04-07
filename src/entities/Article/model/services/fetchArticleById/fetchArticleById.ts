import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articles/fetchArticleById',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Article>(`/articles/${id}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
