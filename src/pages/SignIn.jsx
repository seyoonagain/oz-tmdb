import React from 'react';
import Input from '../components/ui/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { socialSignIn } from '../api/SocialAuth';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SIGN_IN_SCHEMA } from '../lib/schemas';
import { SIGN_IN_INPUT_ELEMENTS } from '../lib/constants';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SIGN_IN_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { signIn } = useAuthContext();
  const onSubmit = ({ email, password }) => {
    signIn({ email, password }).then(console.log);
  };
  const handleSocialSignIn = (provider) => {
    socialSignIn(provider);
  };
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <section className='border border-zinc-950 dark:border-zinc-100 px-10 py-7'>
        <h2 className='text-xl font-bold mb-10 font-dePixel'>Login</h2>
        <form
          className='flex flex-col items-center gap-3 font-chicago'
          onSubmit={handleSubmit(onSubmit)}
        >
          {SIGN_IN_INPUT_ELEMENTS.map((el) => (
            <div className='flex flex-col font-chicago text-lg' id={el.name}>
              <label htmlFor={el.label}>{el.label}</label>
              <input
                {...register(el.name)}
                type={el.type}
                name={el.name}
                id={el.label}
                className='border-b border-zinc-950 dark:border-zinc-100 bg-transparent w-72 h-7 outline-none px-1'
                autoComplete='off'
              />
            </div>
          ))}
          <button
            type='submit'
            className='my-5 text-zinc-950 dark:text-zinc-100 border-2 border-zinc-950 dark:border-zinc-100 rounded-xl text-lg px-2 active:border-l-[3px] active:border-t-[3px] active:border-r-[1px] active:border-b-[1px]'
          >
            Login
          </button>
        </form>
        <div className='flex flex-col items-center font-chicago'>
          <p className='text-lg text-zinc-500'>
            Don’t have an account?{' '}
            <span className='underline cursor-pointer font-bold text-zinc-950 dark:text-zinc-100'>
              <Link to='/sign-up'>Sign up</Link>
            </span>
          </p>
          <p className='my-5 text-zinc-500'>or continue with</p>
          <div className='flex gap-5 text-lg'>
            <button
              onClick={() => handleSocialSignIn('google')}
              className='text-zinc-950 dark:text-zinc-100 border border-zinc-950 dark:border-zinc-100 text-lg px-2'
            >
              Google
            </button>
            <button
              onClick={() => handleSocialSignIn('kakao')}
              className='text-zinc-950 dark:text-zinc-100 border border-zinc-950 dark:border-zinc-100 text-lg px-2'
            >
              Kakao
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
