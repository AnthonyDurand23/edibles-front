import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { IoSearchOutline as SearchBarTrigger } from '@react-icons/all-files/io5/IoSearchOutline';
import { useOpenFoodFactAPI } from '../../hooks/useOpenFoodFactsAPI';

// Actions
import {
  setCurrentSearchApiValue,
  resetCurrentSearchApiValue,
  setLoadingOffApi,
} from '../../redux/actions/openFoodFacts';
import { setToggleSearchbar } from '../../redux/actions/interface';

const SearchBarAPI = ({
  trigger, rounded, fieldPaddingX, fieldPaddingY, formPadding, width, placeholder, autofocus,
}) => {
  // Styling props
  const divClassname = `static z-10 flex shadow m-auto bg-white ${width} ${fieldPaddingX} ${fieldPaddingY} ${width} ${rounded}`;

  const dispatch = useDispatch();
  const history = useHistory();
  const searchAPIValue = useSelector((state) => state.openFoodFacts.search);
  const fetchData = useOpenFoodFactAPI(searchAPIValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLoadingOffApi());
    fetchData();
    dispatch(resetCurrentSearchApiValue());
    dispatch(setToggleSearchbar());
    history.push('/product');
  };

  const handleChange = (event) => {
    dispatch(setCurrentSearchApiValue(event.target.value));
  };

  return (
    <form className={`${formPadding} absolute md:static top-[5%] md:py-3 left-0 z-50 w-full text-custom-darkgrey`} onSubmit={(event) => handleSubmit(event)}>
      <div className={divClassname}>
        <button type="submit" className="highlight-none">
          {trigger && <SearchBarTrigger className="pr-2 icon-clamp-s text-custom-darkgrey" />}
        </button>
        <input
          className="w-full p-2 bg-transparent md:text-lg md:p-1 focus:outline-none"
          type="text"
          placeholder={placeholder}
          value={searchAPIValue}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autofocus}
          onChange={handleChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') handleSubmit(event);
          }}
        />
      </div>
    </form>
  );
};

SearchBarAPI.propTypes = {
  trigger: PropTypes.bool.isRequired,
  rounded: PropTypes.string.isRequired,
  fieldPaddingX: PropTypes.string.isRequired,
  fieldPaddingY: PropTypes.string.isRequired,
  formPadding: PropTypes.string,
  width: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  autofocus: PropTypes.bool,
};

SearchBarAPI.defaultProps = {
  autofocus: false,
  width: '',
  formPadding: '',
};

export default SearchBarAPI;
