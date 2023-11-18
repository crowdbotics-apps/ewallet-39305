import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_wallet_list = createAsyncThunk(
  "wallets/api_v1_wallet_list",
  async payload => {
    const response = await apiService.api_v1_wallet_list(payload)
    return response.data
  }
)
export const api_v1_wallet_create = createAsyncThunk(
  "wallets/api_v1_wallet_create",
  async payload => {
    const response = await apiService.api_v1_wallet_create(payload)
    return response.data
  }
)
export const api_v1_wallet_retrieve = createAsyncThunk(
  "wallets/api_v1_wallet_retrieve",
  async payload => {
    const response = await apiService.api_v1_wallet_retrieve(payload)
    return response.data
  }
)
export const api_v1_wallet_update = createAsyncThunk(
  "wallets/api_v1_wallet_update",
  async payload => {
    const response = await apiService.api_v1_wallet_update(payload)
    return response.data
  }
)
export const api_v1_wallet_partial_update = createAsyncThunk(
  "wallets/api_v1_wallet_partial_update",
  async payload => {
    const response = await apiService.api_v1_wallet_partial_update(payload)
    return response.data
  }
)
export const api_v1_wallet_destroy = createAsyncThunk(
  "wallets/api_v1_wallet_destroy",
  async payload => {
    const response = await apiService.api_v1_wallet_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_wallet_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_wallet_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_wallet_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_wallet_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_wallet_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_wallet_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_wallet_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_wallet_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_wallet_list,
  api_v1_wallet_create,
  api_v1_wallet_retrieve,
  api_v1_wallet_update,
  api_v1_wallet_partial_update,
  api_v1_wallet_destroy,
  slice: walletsSlice
}
