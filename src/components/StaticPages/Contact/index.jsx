import React from 'react';

import ContactFormContainer from './ContactFormContainer';
import logo from '../../../assets/img/logo.png';

const Contact = () => (
  <div className="flex flex-col items-center justify-start h-full gap-1 px-4 pt-8 text-custom-darkgrey">
    <img className="w-2/3 pb-3" src={logo} alt="logo du site edibles" />
    <h2>Contactez nous ! </h2>
    <ContactFormContainer />
  </div>
);

export default Contact;
