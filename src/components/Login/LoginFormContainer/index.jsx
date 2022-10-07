import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setUserField, loginUser, reportError } from '../../../redux/actions/user';

import LoginForm from '../LoginForm';
import Message from '../../Message';

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const error = useSelector((state) => state.user.message);

  React.useEffect(() => (
    function cleanup() {
      dispatch(reportError(''));
    }
  ), []);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };
  const handleLogin = () => {
    dispatch(loginUser());
  };

  return (
    <>
      <Message color="text-red-800" size="text-base" content={error} />
      <LoginForm
        email={email}
        password={password}
        changeField={changeField}
        handleLogin={handleLogin}
      />
    </>
  );
};

export default LoginFormContainer;
