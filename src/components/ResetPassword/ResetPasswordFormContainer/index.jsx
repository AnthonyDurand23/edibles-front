import React from 'react';
import PropTypes from 'prop-types';

// Actions
import { useSelector, useDispatch } from 'react-redux';
import {
  setUserField, reportError, resetPassword,
} from '../../../redux/actions/user';

// Components
import Message from '../../Message';
import ResetPasswordForm from '../ResetPasswordForm';

const ResetPasswordFormContainer = ({ token }) => {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.user.password);
  const repeatPassword = useSelector((state) => state.user.repeatPassword);
  const error = useSelector((state) => state.user.message);
  const success = useSelector((state) => state.user.successMessage);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };
  const handleResetPassword = () => {
    if (password !== repeatPassword) {
      dispatch(reportError('Veuillez vérifier votre mot de passe.'));
      return;
    }
    dispatch(resetPassword(token));
  };

  return (
    <>
      <p className="text-center">Veuillez renseigner votre nouveau mot de passe</p>
      <Message color={error ? 'text-red-800' : 'text-green-800'} size="text-base" content={error || success} />
      <ResetPasswordForm
        password={password}
        repeatPassword={repeatPassword}
        changeField={changeField}
        handleResetPassword={handleResetPassword}
      />
    </>
  );
};

ResetPasswordFormContainer.propTypes = {
  token: PropTypes.string.isRequired,
};
export default ResetPasswordFormContainer;
