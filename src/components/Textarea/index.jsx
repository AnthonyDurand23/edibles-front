import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  value, name, placeholder, onChange, rows, cols, required,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const textareaId = `textarea-${name}`;

  return (
    <div className="relative flex items-center w-full h-full bg-white rounded-full">
      <label htmlFor={textareaId} className="absolute w-full h-full z-[-1]">{name}</label>
      <textarea
        rows={rows}
        cols={cols}
        value={value}
        onChange={handleChange}
        id={textareaId}
        className="absolute w-full h-full p-4 text-base bg-transparent text-custom-darkgrey focus:outline-none focus:shadow-outline highlight-none"
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </div>
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Textarea.defaultProps = {
  required: false,
};
export default Textarea;
