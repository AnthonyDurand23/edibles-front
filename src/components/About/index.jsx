import React from 'react';

import CardAboutContainer from './CardAboutContainer';
import logo from '../../assets/img/logo.png';

const About = () => (
  <div className="flex flex-col items-center justify-start h-full px-4 pt-4 text-custom-darkgrey">
    <img className="w-2/6 " src={logo} alt="logo du site edibles" />
    <div className="flex flex-col gap-4 pb-4">
      <CardAboutContainer />
    </div>
  </div>
);

export default About;
