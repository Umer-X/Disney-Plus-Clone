import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
    name: "",
    email: "",
    photo: "",
};

const userSlice = createSlice ({
    name: "user",
    initialState: initialSlice, // Fixed naming here
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email; // Fixed typo here
            state.photo = action.payload.photo;
        },

        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer; // Don't forget to export the reducer
