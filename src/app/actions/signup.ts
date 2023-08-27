import { createAction } from "redux-actions";
import { SignUp } from '../models/SignUpModel';
import { Dispatch, bindActionCreators } from 'redux';
import { useMemo } from "react";


export namespace SignupActions {
    export enum Type {
        SIGN_UP = 'AUTH_LOGIN',
      }
  export const authLogin = createAction<PartialPick<SignUp, 'email' | 'password'>>(Type.SIGN_UP);
  };

export type SignupActions = Omit<typeof SignupActions, 'Type'>;

export const useSignupActions = (dispatch: Dispatch) => {
    const { Type, ...actions } = SignupActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as SignupActions;
  };