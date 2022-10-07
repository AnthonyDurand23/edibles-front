import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { RiMailFill as EmailIcon } from '@react-icons/all-files/ri/RiMailFill';
// Components
import Field from '../../Fields';

const ForgotPasswordForm = ({
  email, changeField, handleForgotPassword,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleForgotPassword(email);
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
        <button type="submit" className="self-center w-3/4 p-2 rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none">Envoyer</button>
      </form>

    </div>
  );
};

ForgotPasswordForm.propTypes = {
  email: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleForgotPassword: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
