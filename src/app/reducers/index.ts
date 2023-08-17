import { combineReducers } from 'redux';
import { authReducer } from './auths';
import { RootState } from './state';
import { todoReducer } from './todos';
import { signupReducer } from './signup';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  todos: todoReducer,
  auths: authReducer,
  singup: signupReducer
});
