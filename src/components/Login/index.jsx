import React from 'react';

import LoginFormContainer from './LoginFormContainer';

import logo from '../../assets/img/logo.png';

const Login = () => (
  <div className="flex flex-col items-center justify-start h-full gap-2 px-4 pt-8 md:pb-8 text-custom-darkgrey">
    <img className="w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/3" src={logo} alt="logo du site edibles" />
    <LoginFormContainer />
  </div>
);
export default Login;
