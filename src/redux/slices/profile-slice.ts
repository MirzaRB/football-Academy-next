import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IObj {
  imageUrl:string,
  name: string;
  rank: string;
  position: string;
  height: string;
  weight: string;
  offDef: "offense" | "defence";
  exercises: string[];
  bio: string;
  education: string;
  fourtyYard: string;
  twentyYard: string;
  verticalJump: string;
  broadJump: string;
  threeCone: string;
  bench: string;
  rating:number;
}



interface IinitialState {
  initialValues: IObj;
  editMode: boolean;
  videos:IVideo[],
  featuredVideo:string
}

const initialState: IinitialState = {
  initialValues: {
    imageUrl:"/images/upload-img.png",
    name: "",
    rank: "",
    position: "",
    height: "",
    weight: "",
    offDef: "offense",
    exercises: [],
    bio: "",
    education: "",
    fourtyYard: "",
    twentyYard: "",
    verticalJump: "",
    broadJump: "",
    threeCone: "",
    bench: "",
    rating:0,
  },
  editMode: true,
  videos:[],
  featuredVideo:"",
};

export const playerProfileSlice = createSlice({
  name: "profile-slice",
  initialState,
  reducers: {
    updateProfile: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { updateProfile } = playerProfileSlice.actions;
