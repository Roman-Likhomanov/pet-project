import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData, Profile, ProfileSchema } from 'entities/Profile';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateError = undefined;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.isLoading = true;
            state.validateError = undefined;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
            state.validateError = undefined;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.validateError = action.payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
