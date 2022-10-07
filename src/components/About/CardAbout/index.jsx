/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { RiGithubFill as GithubIcon } from '@react-icons/all-files/ri/RiGithubFill';
import { RiLinkedinBoxFill as LinkedinIcon } from '@react-icons/all-files/ri/RiLinkedinBoxFill';

const CardAbout = ({
  firstname, lastname, url_picture, roles, githubLink, linkedinLink,
}) => (
  <div className="flex w-full flex-col overflow-hidden border-2 shadow-lg bg-opacity-60 bg-custom-green-3 rounded-xl border-custom-brown-2">
    <header className="flex justify-around gap-3 px-3 py-1 text-xl font-bold bg-custom-brown-2 font-ediblesBodyTitle">
      <span>
        {firstname}
        {' '}
        {lastname}
      </span>
    </header>
    <div className="flex">
      <img className="object-contain w-2/6 p-1 bg-custom-brownish" src={url_picture} alt={`illustration de ${firstname}`} />
      <div className="flex flex-col w-full">
        <div className="gap-3 p-3 text-base font-ediblesBody text-custom-darkgrey">
          <div className="text-center justify-evenly italic text-lg leading-7">
            {
            roles.map((role) => (
              <h2 key={role}>{role}</h2>
            ))
          }
          </div>
          <div className="text-center flex  justify-around">
            <a aria-label="github-link" href={githubLink} target="_blank"><GithubIcon size="2.5rem" /></a>
            <a aria-label="linkedin-link" href={linkedinLink} target="_blank"><LinkedinIcon size="2.5rem" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CardAbout.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  url_picture: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
  githubLink: PropTypes.string,
  linkedinLink: PropTypes.string,
};

CardAbout.defaultPropTypes = {
  githubLink: '',
  linkedinLink: '',
};
export default CardAbout;
