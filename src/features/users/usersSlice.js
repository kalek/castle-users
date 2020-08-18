import { createSlice } from '@reduxjs/toolkit';
import mockData from 'mock/users.js';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    setUsersList: (state, { payload }) => {
      const { users } = payload;
      state.users = users;
    },
    setLoading: (state, { payload }) => {
      const { loading } = payload;
      state.loading = loading;
    },
  },
});

export const { setUsersList, setLoading } = usersSlice.actions;

export const fetchUsers = (amount) => (dispatch) => {
  dispatch(setLoading({ loading: true }));
  setTimeout(() => {
    dispatch(setUsersList({ users: mockData }));
    dispatch(setLoading({ loading: false }));
  }, 2000);
};

export const getUsers = (state) => state.users.users;
export const getLoading = (state) => state.users.loading;

export default usersSlice.reducer;
