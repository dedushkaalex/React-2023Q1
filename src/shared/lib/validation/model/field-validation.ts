import { number, object, string } from 'yup';

const FIRST_LETTER_UPPERCASE_REGEXP = /^([A-Z][a-z0-9_-]{3,19}|[А-Я][а-я0-9_-]{3,19})$/;

export const RegisterSchema = object({
  name: string().matches(FIRST_LETTER_UPPERCASE_REGEXP, {
    excludeEmptyString: true,
    message: 'Only the first character must be a capital letter',
  }),
  age: number().positive('Should be number, no negative values').integer(),
  email: string().email().required(),
});
