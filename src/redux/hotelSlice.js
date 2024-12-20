// hotelSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHotels as fetchHotelService } from "../services/services";

// Async thunk to fetch hotels
export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async () => {
    const data = await fetchHotelService();
    return data;
  }
);

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    addHotel: (state, action) => {
      state.items.push(action.payload);
    },
    editHotel: (state, action) => {
      const { id, updatedHotel } = action.payload; // Ensure this structure matches
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        // Update only the targeted hotel, not the entire state
        state.items[index] = { ...state.items[index], ...updatedHotel };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;  // Replace the entire list of hotels
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addHotel, editHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
