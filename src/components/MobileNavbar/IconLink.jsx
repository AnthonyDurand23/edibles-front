import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaSignature as SignupIco } from '@react-icons/all-files/fa/FaSignature';
import { FaComments as ContactIco } from '@react-icons/all-files/fa/FaComments';
import { BiLogIn as LoginIco } from '@react-icons/all-files/bi/BiLogIn';
import { BiLogOut as LogoutIco } from '@react-icons/all-files/bi/BiLogOut';
import { BsQuestionCircle as AboutIco } from '@react-icons/all-files/bs/BsQuestionCircle';
import { GoLaw as LegalIco } from '@react-icons/all-files/go/GoLaw';
import { AiOutlineHome as HomeIco } from '@react-icons/all-files/ai/AiOutlineHome';
import { RiUser3Fill as UserIco } from '@react-icons/all-files/ri/RiUser3Fill';
import { RiFridgeFill as StockIco } from '@react-icons/all-files/ri/RiFridgeFill';

const IconLink = ({
  route, label, onClick, additionalStyle,
}) => {
  let { icon, classname } = '';
  switch (route) {
    case '/':
      icon = <HomeIco size="2.25rem" />;
      classname = 'flex items-center gap-6 text-custom-cream';
      break;
    case '/user':
      icon = <UserIco size="2.25rem" />;
      classname = 'flex items-center gap-6 text-custom-cream';
      break;
    case '/stock':
      icon = <StockIco size="2.25rem" />;
      classname = 'flex items-center gap-6 text-custom-cream';
      break;
    case '/login':
      icon = <LoginIco size="3rem" />;
      classname = 'flex items-center gap-6 text-custom-cream';
      break;
    case '/signup':
      icon = <SignupIco size="3rem" />;
      classname = 'flex items-center gap-6 text-custom-cream';
      break;
    case '/contact':
      icon = <ContactIco size="1.5rem" />;
      classname = 'flex items-center gap-6 text-lg text-custom-darkgrey';
      break;
    case '/about':
      icon = <AboutIco size="1.5rem" />;
      classname = 'flex items-center gap-6 text-lg text-custom-darkgrey';
      break;
    case '/legal':
      icon = <LegalIco size="1.5rem" />;
      classname = 'flex items-center gap-6 text-lg text-custom-darkgrey';
      break;
    default:
      break;
  }
  if (additionalStyle) classname = `${classname} ${additionalStyle}`;
  switch (label) {
    case 'Se déconnecter':
      icon = <LogoutIco size="1.5rem" />;
      classname = 'flex items-center gap-6 text-lg text-custom-cream';
      break;
    default:
      break;
  }

  return (
    <>
      {route && (
      <Link className={classname} to={route} onClick={onClick}>
        {icon}
        {label && <span>{label}</span>}
      </Link>
      )}
      {!route && (
      <button type="button" className={classname} onClick={onClick}>
        {icon}
        {label && <span>{label}</span>}
      </button>
      )}
    </>

  );
};

IconLink.propTypes = {
  route: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  additionalStyle: PropTypes.string,
};

IconLink.defaultProps = {
  route: '',
  label: '',
  onClick: () => {},
  additionalStyle: '',
};

export default IconLink;
