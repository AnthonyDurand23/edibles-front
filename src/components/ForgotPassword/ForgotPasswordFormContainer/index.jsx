import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setUserField, requestResetPassword } from '../../../redux/actions/user';

import ForgotPasswordForm from '../ForgotPasswordForm';
import Message from '../../Message';

const ForgotPasswordFormContainer = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const error = useSelector((state) => state.user.message);
  const success = useSelector((state) => state.user.successMessage);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };
  const handleForgotPassword = (value) => {
    dispatch(requestResetPassword(value));
  };

  return (
    <>
      <p className="text-center">Veuillez renseigner votre email de compte afin de définir un nouveau mot de passe</p>
      <Message color={error ? 'text-red-800' : 'text-green-800'} size="text-base" content={error || success || ''} />
      <ForgotPasswordForm
        email={email}
        changeField={changeField}
        handleForgotPassword={handleForgotPassword}
      />
    </>
  );
};

export default ForgotPasswordFormContainer;
