import { z } from 'zod';

const PASSWORD_REGEXP =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,15}$/;
const EMAIL_REGEXP = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

const EMAIL_SCHEMA = {
  email: z
    .string()
    .trim()
    .nonempty({ message: 'Please enter your email.' })
    .regex(EMAIL_REGEXP, { message: 'Please check your email' })
    .email({ message: 'Please check your email address.' }),
};

export const SIGN_IN_SCHEMA = z.object({
  ...EMAIL_SCHEMA,
  password: z
    .string()
    .trim()
    .nonempty('Please enter your password.')
    .regex(PASSWORD_REGEXP, { message: 'Please check your password.' }),
});

export const SIGN_UP_SCHEMA = z
  .object({
    ...EMAIL_SCHEMA,
    username: z
      .string()
      .trim()
      .nonempty({ message: 'Please enter your username.' }),
    password: z
      .string()
      .trim()
      .nonempty('Please enter your password.')
      .regex(PASSWORD_REGEXP, { message: 'Please check your password' }),
    confirmPassword: z
      .string()
      .trim()
      .nonempty('Please enter your password.')
      .regex(PASSWORD_REGEXP, { message: 'Please check your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
