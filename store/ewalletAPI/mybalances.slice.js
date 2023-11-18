import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_mybalance_list = createAsyncThunk(
  "mybalances/api_v1_mybalance_list",
  async payload => {
    const response = await apiService.api_v1_mybalance_list(payload)
    return response.data
  }
)
export const api_v1_mybalance_create = createAsyncThunk(
  "mybalances/api_v1_mybalance_create",
  async payload => {
    const response = await apiService.api_v1_mybalance_create(payload)
    return response.data
  }
)
export const api_v1_mybalance_retrieve = createAsyncThunk(
  "mybalances/api_v1_mybalance_retrieve",
  async payload => {
    const response = await apiService.api_v1_mybalance_retrieve(payload)
    return response.data
  }
)
export const api_v1_mybalance_update = createAsyncThunk(
  "mybalances/api_v1_mybalance_update",
  async payload => {
    const response = await apiService.api_v1_mybalance_update(payload)
    return response.data
  }
)
export const api_v1_mybalance_partial_update = createAsyncThunk(
  "mybalances/api_v1_mybalance_partial_update",
  async payload => {
    const response = await apiService.api_v1_mybalance_partial_update(payload)
    return response.data
  }
)
export const api_v1_mybalance_destroy = createAsyncThunk(
  "mybalances/api_v1_mybalance_destroy",
  async payload => {
    const response = await apiService.api_v1_mybalance_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mybalancesSlice = createSlice({
  name: "mybalances",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_mybalance_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mybalance_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mybalance_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mybalance_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mybalance_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mybalance_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_mybalance_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_mybalance_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_mybalance_list,
  api_v1_mybalance_create,
  api_v1_mybalance_retrieve,
  api_v1_mybalance_update,
  api_v1_mybalance_partial_update,
  api_v1_mybalance_destroy,
  slice: mybalancesSlice
}
