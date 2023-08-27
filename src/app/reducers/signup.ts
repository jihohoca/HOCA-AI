
import { handleActions } from "redux-actions";
import { RootState } from "./state";
import { SignUp } from 'app/models/SignUpModel';
import { SignupActions } from "app/actions";

const initialState: RootState.SingupState= {
    email: '',
    password: ''
  };

export const signupReducer = handleActions<RootState.SingupState, SignUp>(

    {
        [SignupActions.Type.SIGN_UP]: (state, action) => {
          console.log(action)
          if (action.payload) {
            state.email = action.payload.email || '';
            state.password = action.payload.password || '';
          }
          return state;
        }
      },
      initialState
 );