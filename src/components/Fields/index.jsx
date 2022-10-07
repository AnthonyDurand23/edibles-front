import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Field = ({
  value, type, name, placeholder, onChange, required, labelClassOnFocus, placeholderBehaviour, minLength,
}) => {
  const defaultLabelClass = 'absolute w-full h-full z-[-1] text-xs';
  const [labelClass, setLabelClass] = useState(defaultLabelClass);

  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="relative flex items-center w-full h-full bg-white rounded-full">
      <label htmlFor={inputId} className={labelClass}>{placeholder}</label>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className={`absolute w-full h-full px-4 text-base bg-transparent text-custom-darkgrey focus:outline-none focus:shadow-outline highlight-none ${placeholderBehaviour} placeholder-shown:text-sm`}
        placeholder={placeholder}
        name={name}
        required={required}
        onFocus={() => { if (labelClassOnFocus) setLabelClass(labelClassOnFocus); }}
        onBlur={() => { if (labelClassOnFocus && !value) setLabelClass(defaultLabelClass); }}
        minLength={minLength}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  labelClassOnFocus: PropTypes.string,
  placeholderBehaviour: PropTypes.string,
  minLength: PropTypes.number,
};

Field.defaultProps = {
  value: '',
  type: 'text',
  required: false,
  placeholderBehaviour: '',
  labelClassOnFocus: '',
};

export default Field;
