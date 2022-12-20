import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserById = createAsyncThunk(
  "users/fetchById",
  async (userId: number) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return res.data;
  }
);

type InitialState = {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: number;
        lng: number;
      };
    };
    phone: string;
    website: string;
    company?: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.error = "";
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default authSlice;
