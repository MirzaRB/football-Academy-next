import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  user: IUser | null;
  token: string | null;
  profilePercentage: number;
}

const initialState: IUserState = {
  user: null,
  token: null,
  profilePercentage: 20,
};

export const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setProfilePercentage: (state, action: PayloadAction<number>) => {
      state.profilePercentage = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("access_token");
    },
  },
});

export const { setUser, setToken, logout, setProfilePercentage } =
  userSlice.actions;
