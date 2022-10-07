import React from 'react';
import PropTypes from 'prop-types';

const Message = ({
  color, size, weight, content, paddingX, paddingY, align, lineHeight,
}) => (
  <p className={`${paddingX} ${paddingY} ${color} ${size} ${lineHeight} ${align} ${weight} h-[fit-content]`}>{content}</p>
);

Message.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  weight: PropTypes.string,
  content: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
  align: PropTypes.string,
  lineHeight: PropTypes.string,
};

Message.defaultPropTypes = {
  content: '',
};

export default Message;
