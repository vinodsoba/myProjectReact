import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { emailSignInStart, signInWithGoogle, resetAllAuthForms } from './../../redux/User/user.actions';

//my code
import Buttons from './../Forms/Button';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess
})

const SignIn = props => {
  const { signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

useEffect(() => {
  if(signInSuccess){
    resetForm();
    dispatch(resetAllAuthForms());
    props.history.push('/');
  }
}, [signInSuccess]);


const resetForm = () => {
  setEmail('');
  setPassword('');
};

const handleSubmit = event => {
      event.preventDefault();
      dispatch(emailSignInStart({ email, password }));
    }

const handleGoogleSignIn = () => {
  dispatch(signInWithGoogle());
}

    const configAuthWrapper = {
      headline: 'LogIn'
    };

    return (
      <AuthWrapper {...configAuthWrapper}>
       <div className="formWrap">
        <form onSubmit={handleSubmit}>

            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={e => setEmail(e.target.value)}
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={e => setPassword(e.target.value)}
            />

          <Buttons type="submit">
            Login
          </Buttons>

            <div className="socialSignin">
              <div className="row">
                <Buttons onClick={handleGoogleSignIn}>
                  Sign in with Google
                </Buttons>
              </div>

               <div className="links">
                 <Link to='/recovery'>
                   Reset Password
                 </Link>
               </div>
            </div>
          </form>
       </div>
      </AuthWrapper>
    );
}

export default withRouter(SignIn);
