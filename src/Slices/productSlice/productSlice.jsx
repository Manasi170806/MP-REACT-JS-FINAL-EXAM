import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "http://localhost:3000/products";

// Fetch products
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch(API);
  return res.json();
});

// Add product
export const addProduct = createAsyncThunk("products/add", async (product) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
});

// Edit product
export const editProduct = createAsyncThunk(
  "products/edit",
  async ({ id, product }) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    return res.json();
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    return id;
  }
);

// Slice
const productSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        // state.status = "succeeded";
        // state.items = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((product) => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
