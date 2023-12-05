import { ObjectSchema, boolean, mixed, number, object, ref, string } from 'yup';

const FIRST_LETTER_UPPERCASE_REGEXP = /^([A-Z][a-z0-9_-]{3,19}|[А-Я][а-я0-9_-]{3,19})$/;
const PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm;

const MAX_FILE_SIZE = 402400; //100KB

const validFileExtensions: { [key: string]: string[] } = {
  image: ['jpg', 'png', 'jpeg'],
};

function isValidFileType(fileName: string, fileType: string) {
  if (fileName) {
    const fileExtension = fileName.split('.').pop();
    if (fileExtension) {
      return fileName && validFileExtensions[fileType].indexOf(fileExtension) > -1;
    }
  }
  return false;
}
type FormFalues = ObjectSchema<{
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  sex: string;
  terms_of_use: boolean;
  picture: FileList;
}>;

export const registerSchema: FormFalues = object({
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
  terms_of_use: boolean().required().oneOf([true, false], 'You must accept the user agreement'),
  picture: mixed<FileList>()
    .required()
    .test('required', 'You need to provide a file', (file) => {
      if (file[0]) return true;
      return false;
    })
    .test(
      'is-valid-type',
      'Not a valid image type',
      (value) => isValidFileType(value[0] && value[0].name.toLowerCase(), 'image') as boolean
    )
    .test(
      'is-valid-size',
      'Max allowed size is 400KB',
      (value) => value[0] && value[0].size <= MAX_FILE_SIZE
    ),
});
