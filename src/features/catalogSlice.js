import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCatalog } from '../api/catalog';

export const loadAllCatalog = createAsyncThunk(
  'catalog/loadAllCatalog',
  async (payload) => {
    //console.log(payload);
    const posts = await getCatalog(payload);;
    return posts;
  }
);

const top1 = {
  id: 1,
  image: 'top1',
  name: 'Top1',
  price: '20$',
};
const top2 = {
  id: 2,
  image: 'top2',
  name: 'Top2',
  price: '10$',
};

const def = {
  id: 3,
  image: 'default',
  name: 'Default',
  price: '50$',
};

export const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState: {
    items: [],
    category: "",
    isLoadingCatalog: false,
    hasError: false,
  },
  reducers: {
    setCategorie(state, action) {
      switch(action.payload.category) {
        case 'tops':
          state.category = "tops";
          state.items = [top1, top2];
          break;
        default:
          state.category = "default";
          state.items = [def];
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllCatalog.pending, (state) => {
        state.isLoadingCatalog = true;
        state.hasError = false;
      })
      .addCase(loadAllCatalog.fulfilled, (state, action) => {
        state.isLoadingCatalog = false;
        state.items = action.payload;
      })
      .addCase(loadAllCatalog.rejected, (state) => {
        state.isLoadingCatalog = false;
        state.hasError = true;
        state.items = [];
      })
  },
});

export const selectAllItems = (state) => state.catalogue.items;

export const selectCategories = (state) => state.catalogue.categories;

export const isLoading = (state) => state.catalogue.isLoadingCatalog;

export const {setCategorie} = catalogueSlice.actions;

export default catalogueSlice.reducer;