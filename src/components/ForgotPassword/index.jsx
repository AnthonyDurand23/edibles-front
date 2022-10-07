import React from 'react';

import ForgotPasswordFormContainer from './ForgotPasswordFormContainer';

import logo from '../../assets/img/logo.png';

const ForgotPassword = () => (
  <div className="flex flex-col items-center justify-start h-full gap-1 px-4 pt-8 text-custom-darkgrey">
    <img className="w-2/3 pb-3 md:w-2/5" src={logo} alt="logo du site edibles" />
    <ForgotPasswordFormContainer />
  </div>
);
export default ForgotPassword;
