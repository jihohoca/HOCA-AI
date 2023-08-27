import React, { useState } from 'react';
import style from './style.css';
import google from '../../../images/google.png';
import microsoft from '../../../images/microsoft.png';
import apple from '../../../images/apple.png';
import check from '../../../images/check right.png';
import eyes from '../../../images/eye.png'
import { Link} from 'react-router-dom';
import {useSignup} from './hook'

export const Body = () => {
  const { signup } = useSignup();
  const initValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {

    e.preventDefault();
    setFormErrors(validate(formValues));

    if (checkPassword == false && validateEmail == true) {
     
      signup({email: formValues.email, password: formValues.password});

      setCheckPassword(false);
      setValidateEmail(false);
    }
  };

  const validate = (values: any) => {
    const errors = { email: '', password: '' };
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if (regex.test(values.email)) {
      setValidateEmail(true);
      setCheckPassword(false)
    } else {
      errors.email = 'Wrong format email';
    }
    if (!regexPassword.test(values.password)) {
      setCheckPassword(true);
    }
    return errors;
  };

  return (
    <div className={style.body_signup}>
      <form>
        <h1>Create your account</h1>
        <div className={style.notification}>
          <div className={style.first_line}>Note that phone verification may be required for</div>
          <div className={style.second_line}>signup.Your number will only be used to verify</div>
          <div className={style.third_line}>your identity for security purposes.</div>
        </div>

        <div>
          <input
            className={style.address}
            type="text"
            name="email"
            placeholder="Email address"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p className={style.validation_email}>{formErrors.email}</p>
        <div>
          <input
    
            className={style.password}
            type={show ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
        <span className={style.image_eye} onClick={handleShow}><img src={eyes}></img></span>
        </div>
        <p className={style.validation_email}>{formErrors.password}</p>

        {checkPassword && (
          <div>
            <div className={style.check_password}>
              <div className={style.line_1}>Your password must contain:</div>

              <div>
                <li className={style.line_2}> At least 1 upper case and special characters</li>
              </div>
            </div>
            <div className={style.line_3}>
              <img src={check}></img> <span className={style.text_line_3}>At least 8 characters</span>
            </div>
          </div>
        )}
        <div onClick={handleSubmit} className={style.continute}>

          <div className={style.text}>
            <div>Continue</div>
          </div>

        </div>

        <div className={style.sigup}>
          Already have an account? &nbsp;{' '}
          <Link to="/login" className={style.link_login}>
            <span>Log in</span>
          </Link>
        </div>

        <div className={style.horizontal_or}>
          <div className={style.horizontal}></div>
          <div className={style.or}>OR</div>
          <div className={style.horizontal}></div>
        </div>

        <div className={style.button_google}>
          <div className={style.button_img}>
            <img src={google} alt="" />
          </div>
          <div className={style.button_text}>Continue With Google</div>
        </div>

        <div className={style.button_microsoft_apple}>
          <div className={style.button_img}>
            <img src={microsoft} alt="" />
          </div>
          <div className={style.button_text}>Continue With Microsoft</div>
        </div>
        <div className={style.button_microsoft_apple}>
          <div className={style.button_img}>
            <img src={apple} alt="" />
          </div>
          <div className={style.button_text}>Continue With Apple</div>
        </div>
      </form>
    </div>
  );
};