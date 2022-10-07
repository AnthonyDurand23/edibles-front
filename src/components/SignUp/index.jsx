import React from 'react';

import FormSignUpContainer from './FormSignUpContainer';

import logo from '../../assets/img/logo.png';

const SignUp = () => (
  <div className="flex flex-col items-center justify-start h-full gap-1 px-4 pt-8 text-custom-darkgrey">
    <img className="w-2/3 pb-3 md:w-2/4 lg:w-2/5 xl:w-1/3" src={logo} alt="logo du site edibles" />
    <FormSignUpContainer />
  </div>
);
export default SignUp;
