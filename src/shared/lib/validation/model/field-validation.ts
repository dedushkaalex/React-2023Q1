import { boolean, number, object, ref, string } from 'yup';

const FIRST_LETTER_UPPERCASE_REGEXP = /^([A-Z][a-z0-9_-]{3,19}|[А-Я][а-я0-9_-]{3,19})$/;
const PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm;

export const registerSchema = object({
  name: string().required().matches(FIRST_LETTER_UPPERCASE_REGEXP, {
    excludeEmptyString: true,
    message: 'Only the first character must be a capital letter',
  }),
  age: number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .positive('Should be number, no negative values')
    .integer()
    .nullable()
    .required(),
  email: string().email().required(),
  password: string().required().matches(PASSWORD, {
    message:
      'Password must contain at least 1 number, 1 capital letter, 1 string letter, 1 special character',
  }),
  confirm_password: string()
    .label('confirm password')
    .required()
    .oneOf([ref('password')], 'Passwords must match'),
  sex: string().required('Field is required'),
  terms_of_use: boolean().oneOf([true], 'You must accept the user agreement'),
});
