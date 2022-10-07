import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { RiLockPasswordFill as PasswordIcon } from '@react-icons/all-files/ri/RiLockPasswordFill';
import { BsEyeFill as ShowPassword } from '@react-icons/all-files/bs/BsEyeFill';

// Components
import Field from '../../Fields';

const ResetPasswordForm = ({
  password, repeatPassword, changeField, handleResetPassword,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleResetPassword();
  };

  const handleIconColor = (field) => {
    const blank = 'text-gray-500';
    const OK = 'text-custom-green-3';
    const notOK = 'text-red-500';
    if (!field) return blank;
    if (field.length >= 8 && (!password.length || !repeatPassword.length)) return OK;
    if (field.length < 8 || password !== repeatPassword) return notOK;
    return OK;
  };

  const handleVisibilityToggle = (id) => {
    const passwordInput = document.getElementById(id);
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  };

  return (
    <div className="w-full max-w-lg">
      <form className="flex flex-col gap-4 px-4 mb-4 bg-white shadow-md py-7 rounded-3xl bg-opacity-30" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between h-12 px-5 bg-white rounded-full">
          <PasswordIcon size="1.2rem" className={handleIconColor(password)} />
          <Field
            name="password"
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={changeField}
            minLength={8}
            required
          />
          <ShowPassword size="1.2rem" className="text-gray-400" onClick={() => handleVisibilityToggle('field-password')} />
        </div>
        <div className="flex items-center justify-between h-12 px-5 bg-white rounded-full">
          <PasswordIcon size="1.2rem" className={handleIconColor(repeatPassword)} />
          <Field
            name="repeatPassword"
            type="password"
            value={repeatPassword}
            placeholder="Confirmation du mot de passe"
            onChange={changeField}
            minLength={8}
            required
          />
          <ShowPassword size="1.2rem" className="text-gray-400" onClick={() => handleVisibilityToggle('field-repeatPassword')} />
        </div>
        <button type="submit" className="self-center w-3/4 p-2 rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none">Valider</button>
      </form>
    </div>
  );
};

ResetPasswordForm.propTypes = {
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleResetPassword: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
