import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Icons
import { RiLockPasswordFill as PasswordIcon } from '@react-icons/all-files/ri/RiLockPasswordFill';
import { RiMailFill as EmailIcon } from '@react-icons/all-files/ri/RiMailFill';
import { BsEyeFill as ShowPassword } from '@react-icons/all-files/bs/BsEyeFill';
// import { BsEyeSlashFill as HidePassword } from '@react-icons/all-files/bs/BsEyeSlashFill';

// Components
import Field from '../../Fields';

const LoginForm = ({
  email, password, changeField, handleLogin,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const handleVisibilityToggle = () => {
    const passwordInput = document.getElementById('field-password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  };

  return (
    <div className="w-full max-w-lg">
      <form className="flex flex-col gap-4 px-4 mb-4 bg-white shadow-md py-7 rounded-3xl bg-opacity-30" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between h-12 px-5 bg-white rounded-full">
          <EmailIcon size="1.2rem" className="text-gray-500" />
          <Field
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={changeField}
            required
          />
        </div>
        <div className="flex items-center justify-between h-12 px-5 bg-white rounded-full">
          <PasswordIcon size="1.2rem" className="text-gray-500" />
          <Field
            name="password"
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={changeField}
            visibilityToggle
            required
          />
          <ShowPassword size="1.2rem" className="text-gray-400" onClick={handleVisibilityToggle} />
        </div>
        <button type="button" className="text-sm underline"><Link to="/forgotpassword"> Mot de passe oublié ?</Link></button>
        <button type="submit" className="self-center w-3/4 p-2 rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none">Se connecter</button>
      </form>

    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
