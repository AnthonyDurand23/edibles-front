import React from 'react';
// import { Redirect } from 'react-router-dom';

// Actions
import { useSelector, useDispatch } from 'react-redux';
import {
  setUserField, signupUser, reportError, clearAfterSuccess,
} from '../../../redux/actions/user';

// Components
import Message from '../../Message';
import FormSignUp from '../FormSignUp';
import SuccessModal from '../SuccessModal';

const FormSignUpContainer = () => {
  const dispatch = useDispatch();
  const successModal = useSelector((state) => state.user.successModal);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const repeatPassword = useSelector((state) => state.user.repeatPassword);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const message = useSelector((state) => state.user.message);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };
  const handleSignUp = () => {
    if (password !== repeatPassword) {
      dispatch(reportError('Veuillez vérifier votre mot de passe.'));
      return;
    }
    dispatch(signupUser());
  };

  const handleLeaveModal = () => {
    document.body.style.overflow = 'visible';
    dispatch(clearAfterSuccess());
  };

  return (
    <>
      <Message color="text-red-800" size="text-base" content={message} />
      <FormSignUp
        email={email}
        password={password}
        repeatPassword={repeatPassword}
        firstname={firstname}
        lastname={lastname}
        changeField={changeField}
        handleSignUp={handleSignUp}
      />
      {successModal && <SuccessModal exact message={message} to="/login" leaveModal={handleLeaveModal} />}
    </>
  );
};
export default FormSignUpContainer;
