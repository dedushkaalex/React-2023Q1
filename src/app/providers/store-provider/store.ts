import registerReducer from '@/features/register/model/slice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
