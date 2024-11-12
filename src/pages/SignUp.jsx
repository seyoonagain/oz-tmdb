import React, { useState } from 'react';
import Input from '../components/ui/Input';
import { useAuthContext } from '../contexts/AuthContext';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SIGN_UP_SCHEMA } from '../lib/schemas';
import { SIGN_UP_INPUT_ELEMENTS } from '../lib/constants';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import SubmitButton from '../components/ui/\bSubmitButton';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SIGN_UP_SCHEMA),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  const { signUp } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const onSubmit = ({ email, password, username: display_name }) => {
    signUp({ email, display_name, password })
      .then(() => {
        navigate('/');
      })
      .catch((err) => setErrorMessage(err.message));
  };
  return (
    <div className='h-full w-full flex items-center justify-center'>
      {errorMessage && (
        <Alert errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      )}
      <section className='border border-zinc-950 dark:border-zinc-100 px-10 py-7 bg-zinc-100'>
        <h2 className='text-xl font-bold mb-10 font-dePixel'>Sign Up</h2>
        <form
          className='flex flex-col items-center gap-3 font-chicago'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {SIGN_UP_INPUT_ELEMENTS.map((el) => (
            <div className='flex flex-col font-chicago text-lg' key={el.name}>
              <label htmlFor={el.label}>{el.label}</label>
              <input
                {...register(el.name)}
                type={el.type}
                name={el.name}
                id={el.label}
                className='border-b border-zinc-950 dark:border-zinc-100 bg-transparent w-72 h-7 outline-none px-1'
                autoComplete='off'
              />
              {errors[el.name] && (
                <p className='text-red-500 text-sm'>
                  {errors[el.name].message}
                </p>
              )}
            </div>
          ))}
          <SubmitButton text='Sign up' />
        </form>
      </section>
    </div>
  );
};

export default SignUp;
