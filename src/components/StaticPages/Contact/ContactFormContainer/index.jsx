import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setUserField, sendMessageContact } from '../../../../redux/actions/user';
import ContactForm from '../ContactForm';

const ContactFormContainer = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const lastname = useSelector((state) => state.user.lastname);
  const messageContact = useSelector((state) => state.user.messageContact);

  const changeField = (value, name) => {
    dispatch(setUserField(value, name));
  };

  const handleContact = () => {
    dispatch(sendMessageContact());
  };
  return (
    <>
      <ContactForm
        email={email}
        lastname={lastname}
        messageContact={messageContact}
        changeField={changeField}
        handleContact={handleContact}
      />
    </>
  );
};

export default ContactFormContainer;
