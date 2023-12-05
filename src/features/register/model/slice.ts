import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface RegisterFormState {
  name: string;
  age: number | null;
  email: string;
  password: string;
  sex: string | null;
  terms_of_use: boolean;
  picture: string;
}

const State: RegisterFormState = {
  name: '',
  age: null,
  email: '',
  password: '',
  sex: null,
  terms_of_use: false,
  picture: '',
};

export const RegisterSlice = createSlice({
  name: 'registerForm',
  initialState: State,
  reducers: {
    saveFormFields: (state, action: PayloadAction<RegisterFormState>) => {
      state.age = action.payload.age;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.picture = action.payload.picture;
      state.sex = action.payload.sex;
      state.terms_of_use = action.payload.terms_of_use;
    },
  },
});

export const { saveFormFields } = RegisterSlice.actions;

export default RegisterSlice.reducer;
