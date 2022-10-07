import React from 'react';
import PropTypes from 'prop-types';

import { RiMailFill as EmailIcon } from '@react-icons/all-files/ri/RiMailFill';
import { RiUser3Fill as FirstNameIcon } from '@react-icons/all-files/ri/RiUser3Fill';

import Field from '../../../Fields';
import Textarea from '../../../Textarea';

const ContactForm = ({
  email, lastname, messageContact, changeField, handleContact,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleContact();
  };

  return (
    <div className="w-full max-w-lg login-form">
      <form className="flex flex-col gap-4 px-4 mb-4 bg-white shadow-md py-7 rounded-3xl bg-opacity-30" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between h-12 px-5 bg-white rounded-full">
          <FirstNameIcon size="1.2rem" className="text-gray-500" />
          <Field
            name="lastname"
            type="text"
            value={lastname}
            placeholder="Nom"
            onChange={changeField}
          />
        </div>
        <div className="flex items-center justify-between h-12 px-5 bg-white rounded-full">
          <EmailIcon size="1.2rem" className="text-gray-500" />
          <Field
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={changeField}
          />
        </div>
        <div className="flex items-center justify-between h-56 px-5 bg-white rounded-xl">

          <Textarea
            value={messageContact}
            name="messageContact"
            placeholder="Votre Message"
            onChange={changeField}
            rows="5"
            cols="35"
            required
          />
        </div>
        <button type="submit" className="self-center w-3/4 p-2 rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none">Valider</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  email: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  messageContact: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleContact: PropTypes.func.isRequired,
};

export default ContactForm;
