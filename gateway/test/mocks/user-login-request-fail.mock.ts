import { userSignupRequestSuccess } from './user-signup-request-success.mock.js';

export const userLoginRequestFailWrongPw = {
  ...userSignupRequestSuccess,
  password: new Date(),
};

export const userLoginRequestFailWrongEmail = {
  ...userSignupRequestSuccess,
  email: 'failed' + userSignupRequestSuccess.email,
};
