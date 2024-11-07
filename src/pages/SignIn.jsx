import React from 'react';
import Input from '../components/ui/Input';

const SignIn = () => {
  return (
    <section className='border border-zinc-300 rounded-xl px-10 py-7'>
      <h2 className='text-xl font-bold mb-10'>Login</h2>
      <form className='flex flex-col gap-3'>
        <Input type='email' name='email' label='Email' />
        <Input type='password' name='password' label='Password' />
        <button
          type='submit'
          className='bg-blue-500 text-zinc-100 rounded-lg h-8 text-sm font-semibold mt-5'
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default SignIn;
