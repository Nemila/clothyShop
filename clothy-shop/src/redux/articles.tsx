import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllArticles = createAsyncThunk(
  "users/getAllArticles",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

export type Article = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type InitialState = {
  articles: Article[];
  loading: boolean;
  error: string;
};

let initialState: InitialState = {
  articles: [],
  loading: false,
  error: "",
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllArticles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllArticles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(
      getAllArticles.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.error = "";
        state.loading = false;
        state.articles = action.payload;
      }
    );
  },
});

export default articleSlice;
