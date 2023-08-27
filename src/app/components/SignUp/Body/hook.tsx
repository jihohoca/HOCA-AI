import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { useSignupActions } from "app/actions";
import { SignUp } from "app/models/SignUpModel";
import { signupService } from 'app/service/signup.service';

const useSignup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupAction = useSignupActions(dispatch)


    const signup = async (signupUser: SignUp) => {
        let result = await signupService(signupUser)
        if (result) {
          navigate('/chatgpt1');
          signupAction.authLogin({email: signupUser.email, password: signupUser.password});
          localStorage.setItem('accessToken', JSON.stringify(result.data.tokens.access));
          localStorage.setItem('refreshToken', JSON.stringify(result.data.tokens.refresh));
        }
      };
    
      return {
        signup
      };
}
export { useSignup };