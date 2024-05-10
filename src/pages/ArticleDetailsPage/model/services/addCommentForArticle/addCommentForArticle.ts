import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { addCommentFormActions } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import {
    fetchCommentsByArticleId,
} from '../fetchCommensByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
    >(
        'articleDetails/addCommentForArticle',
        async (text, thunkAPI) => {
            const {
                dispatch, extra, rejectWithValue, getState,
            } = thunkAPI;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article?.id,
                    userId: userData?.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(addCommentFormActions.setText(''));
                dispatch(fetchCommentsByArticleId(article?.id));

                return response.data;
            } catch (err) {
                return rejectWithValue('error');
            }
        },
    );
