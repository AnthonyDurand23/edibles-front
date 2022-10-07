import React from 'react';
import { useParams } from 'react-router-dom';
import ResetPasswordFormContainer from './ResetPasswordFormContainer';
import logo from '../../assets/img/logo.png';

const ResetPassword = () => {
  const { token } = useParams();
  return (
    <div className="flex flex-col items-center justify-start h-full gap-1 px-4 pt-8 text-custom-darkgrey">
      <img className="w-2/3 md:w-2/5 pb-3" src={logo} alt="logo du site edibles" />
      <ResetPasswordFormContainer token={token} />
    </div>
  );
};

export default ResetPassword;
