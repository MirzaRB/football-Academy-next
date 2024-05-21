import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IObj {
  imageUrl:string,
  name: string;
  occupation:string;
  school:string;
  teamName:string;
  bio: string;
  lookingFor:string;
}

interface IinitialState {
  initialValues: IObj;
  editMode: boolean;
}

const initialState: IinitialState = {
  initialValues: {
    imageUrl:"/images/upload-img.png",
    name: "",
    occupation:"",
    school:"",
    teamName:"",
    bio: "",
    lookingFor:'',
  },
  editMode: true,
};

export const scoutProfileSlice = createSlice({
  name: "scout-profile-slice",
  initialState,
  reducers: {
    updateProfile: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { updateProfile } = scoutProfileSlice.actions;
