import { SignUp } from '../models/SignUpModel';
import http from './http-common';

export const signupService = async ({email, password} : SignUp) => {
  return await http.post('/auth/register', {
    name:'tran van duc',
    email,
    password
  });
};