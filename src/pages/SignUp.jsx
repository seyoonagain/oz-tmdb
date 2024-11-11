import React from 'react';
import Input from '../components/ui/Input';
import { useAuthContext } from '../contexts/AuthContext';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SIGN_UP_SCHEMA } from '../lib/schemas';
import { SIGN_UP_INPUT_ELEMENTS } from '../lib/constants';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
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
  const onSubmit = ({ email, password, username: display_name }) => {
    signUp({ email, display_name, password });
  };
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <section className='border border-zinc-950 dark:border-zinc-100 px-10 py-7'>
        <h2 className='text-xl font-bold mb-10 font-dePixel'>Sign up</h2>
        <form
          className='flex flex-col items-center gap-3'
          onSubmit={handleSubmit(onSubmit)}
        >
          {SIGN_UP_INPUT_ELEMENTS.map((el) => (
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
            className='text-zinc-950 dark:text-zinc-100 border-2 border-zinc-950 dark:border-zinc-100 rounded-xl font-chicago text-lg px-2 mt-5 active:border-l-[3px] active:border-t-[3px] active:border-r-[1px] active:border-b-[1px]'
          >
            Sign up
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
