// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: localStorage.getItem("loginToken") || null 
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, loginToken } = action.payload;
            state.token = loginToken;
            state.user = user;
            localStorage.setItem("loginToken", loginToken); // Save token to localStorage
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("loginToken"); // Remove token from localStorage
        }
    }
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.authSlice.user;
export const selectCurrentToken = (state) => state.authSlice.token;
