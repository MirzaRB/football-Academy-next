import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user-slice";
import { playerProfileSlice } from "./slices/profile-slice";
import { scoutProfileSlice } from "./slices/scout-slice";
import { coachProfileSlice } from "./slices/coach-slice";

export interface RootState {
  user: ReturnType<typeof userSlice.reducer>;
  profile: ReturnType<typeof playerProfileSlice.reducer>;
  scout: ReturnType<typeof scoutProfileSlice.reducer>;
  coach: ReturnType<typeof coachProfileSlice.reducer>;
}

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  profile: playerProfileSlice.reducer,
  scout: scoutProfileSlice.reducer,
  coach:coachProfileSlice.reducer
});
