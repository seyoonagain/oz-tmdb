export const SIGN_UP_INPUT_ELEMENTS = [
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'username', type: 'text', label: 'Username' },
  { name: 'password', type: 'password', label: 'Password' },
  { name: 'confirmPassword', type: 'password', label: 'Confirm Password' },
];

export const SIGN_IN_INPUT_ELEMENTS = [
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'password', type: 'password', label: 'Password' },
];

export const DROPDOWN_MENUS = {
  beforeSignIn: [
    { title: 'Sign In', url: '/sign-in' },
    { title: 'Sign Up', url: '/sign-up' },
  ],

  afterSignIn: [
    { title: 'My List', url: '/my-list' },
    { title: 'Sign Out', url: '' },
  ],
};
