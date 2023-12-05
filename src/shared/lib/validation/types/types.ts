export type TRegisterFormFalues = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  sex: string;
  terms_of_use?: boolean;
  picture: FileList;
};
