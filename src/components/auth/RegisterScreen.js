import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom'
import {  startRegisterWithEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui)
    // console.log(msgError)
    const [formValues, handelInputChange] = useForm({
        name: 'Gabriel Morales',
        email: 'gmorales@gmail.com',
        password: 'asd3456',
        password2: 'asd3456'
    });
    const { name, email, password, password2 } = formValues;

    const handelRegister = (e) => {
        e.preventDefault();
        if (isFormValue()) {
            // console.log('object')
            dispatch(startRegisterWithEmailPassword(name,email,password ))
            // console.log(name, email, password, password2)
        }
    }
    const isFormValue = () => {
        if (name.trim().length === 0) {
            dispatch(setError('name is Required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('email is Required'))

            return false;

        } else if (password !== password2 || password.length < 5) {
            console.log('err')
            dispatch(setError('Password should be a least 6 characteres and match each other'))
            return false;

        }
        dispatch(removeError())

        return true;
    }
    return (
        <>
            <h3 className='auth__title'>Register</h3>
            <form 
                onSubmit={handelRegister}
                className='animate__animated animate__fadeIn animate__faster'
            >
                {
                    msgError &&
                    (<div
                        className='auth__alert-error'
                    >
                        {msgError}
                    </div>)

                }
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    autoComplete='off'
                    value={name}
                    onChange={handelInputChange}
                />
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    value={email}
                    onChange={handelInputChange}
                    autoComplete='off'
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handelInputChange}
                />
                <input
                    type='password'
                    placeholder='Confirm'
                    name='password2'
                    className='auth__input'
                    value={password2}
                    onChange={handelInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'

                >
                    Register
                </button>


                <Link
                    to='/auth/login'
                    className='link mt-5'
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
