import { z } from 'zod';

const EMAIL_SCHEMA = {
  email: z
    .string()
    .trim()
    .nonempty({ message: 'Enter your email.' })
    .email({ message: '이메일 주소를 확인해 주세요.' }),
};

const PASSWORD_REGEXP =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,15}$/g;

export const SIGN_IN_SCHEMA = z.object({
  ...EMAIL_SCHEMA,
  password: z
    .string()
    .trim()
    .nonempty('비밀번호를 입력해 주세요.')
    .regex(PASSWORD_REGEXP, { message: '비밀번호를 확인해 주세요.' }),
});

export const SIGN_UP_SCHEMA = z
  .object({
    ...EMAIL_SCHEMA,
    username: z
      .string()
      .trim()
      .nonempty({ message: '이메일 주소를 입력해주세요.' }),
    password: z
      .string()
      .trim()
      .nonempty('비밀번호를 입력해주세요.')
      .regex(PASSWORD_REGEXP, { message: '비밀번호를 확인해주세요.' }),
    confirmPassword: z
      .string()
      .trim()
      .nonempty('비밀번호를 입력해주세요.')
      .regex(PASSWORD_REGEXP, { message: '비밀번호를 확인해주세요.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmedPassword'],
  });
