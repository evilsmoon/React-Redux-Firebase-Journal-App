import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword} from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui)
    const [formValues, handelInputChange] = useForm({
        email: 'gmorales@gmail.com',
        password: 'asd3456'
    });

    const { email, password } = formValues;

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
    }
    
    const handelGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }
    return (
        <>
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={handelSubmit}>
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    value={email}
                    onChange={handelInputChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handelInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled={ loading }

                >
                    Login
                </button>

                <div className='auth__social-networks'>
                    <p>Login with social networks </p>
                    <div
                        className="google-btn"
                        onClick={handelGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to='/auth/register'
                    className='link'
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
