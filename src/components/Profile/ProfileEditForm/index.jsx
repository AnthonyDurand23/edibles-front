/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const ProfileEditForm = ({
  firstName, oldFirstName, lastName, oldLastName, email, oldEmail, oldDefaultStock, oldNotifications, stocks, setUserChanges, proceedUpdate, toggleEditForm,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    proceedUpdate();
  };

  return (
    <form className="flex flex-col items-center w-4/5 gap-3 p-3 text-lg text-center bg-opacity-40 bg-custom-darkgrey backdrop-filter backdrop-blur-md rounded-2xl text-custom-cream" name="profileEdit" onSubmit={(event) => handleSubmit(event)}>
      <label className="flex flex-col w-full gap-2 text-xl font-bold text-gray-50">
        Nom
        <input
          type="text"
          name="lastname"
          value={lastName}
          placeholder={oldLastName}
          className="px-3 text-lg font-bold border-2 border-t-0 rounded-b-lg bg-custom-grey bg-opacity-10 border-custom-grey text-custom-grey placeholder-gray-50"
          onChange={(event) => setUserChanges(event.target.name, event.target.value)}
        />
      </label>
      <label className="flex flex-col w-full gap-2 text-xl font-bold text-gray-50">
        Prénom
        <input
          type="text"
          name="firstname"
          value={firstName}
          placeholder={oldFirstName}
          className="px-3 text-lg font-bold border-2 border-t-0 rounded-b-lg bg-custom-grey bg-opacity-10 border-custom-grey text-custom-grey placeholder-gray-50"
          onChange={(event) => setUserChanges(event.target.name, event.target.value)}
        />
      </label>
      <label className="flex flex-col w-full gap-2 text-xl font-bold text-gray-50">
        Adresse Email
        <input
          type="email"
          name="email"
          value={email}
          placeholder={oldEmail}
          className="px-3 text-lg font-bold border-2 border-t-0 rounded-b-lg bg-custom-grey bg-opacity-10 border-custom-grey text-custom-grey placeholder-gray-50"
          onChange={(event) => setUserChanges(event.target.name, event.target.value)}
        />
      </label>
      <label className="flex flex-col w-full gap-2 text-xl font-bold text-gray-50">
        Stock par défaut
        <select id="defaultStock" name="default_stock" className="px-3 py-1 text-lg rounded-md text-custom-darkgrey" onChange={(event) => setUserChanges(event.target.name, event.target.selectedOptions[0].value)}>
          {
            stocks.map((stock) => (
              <option
                key={stock.id}
                data-id={stock.id}
                value={stock.name}
                selected={oldDefaultStock === stock.name}
              >
                {stock.name}
              </option>
            ))
            }
        </select>
      </label>
      <label htmlFor="expiration_date_notification" className="w-full text-xl font-bold text-center text-gray-50">
        Notifications
      </label>
      <div className="relative inline-block mr-2 align-middle select-none">
        <input
          type="checkbox"
          name="expiration_date_notification"
          defaultChecked={oldNotifications}
          className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox"
          onChange={(event) => setUserChanges(event.target.name, event.target.checked)}
        />
        <label htmlFor="expiration_date_notification" className="block w-10 h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"></label>
      </div>
      {/* <label className="flex flex-col w-full gap-2 text-xl font-bold text-gray-50">
        Notifications
        <input
          type="checkbox"
          name="expiration_date_notification"
          defaultChecked={oldNotifications}
          className="checked:bg-pink-500"
          onChange={(event) => setUserChanges(event.target.name, event.target.checked)}
        />
      </label> */}
      <div className="flex flex-col w-full gap-2 mt-3">
        <button
          type="submit"
          className="inline-block w-full py-1 text-center rounded-lg bg-custom-green-2 text-custom-darkgrey"
        >
          Enregistrer
        </button>
        <button
          type="button"
          className="inline-block w-full py-1 text-center rounded-lg bg-custom-green-2 text-custom-darkgrey"
          onClick={toggleEditForm}
        >
          Annuler
        </button>
      </div>
    </form>
  );
};

ProfileEditForm.propTypes = {
  firstName: PropTypes.string,
  oldFirstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  oldLastName: PropTypes.string.isRequired,
  email: PropTypes.string,
  oldEmail: PropTypes.string.isRequired,
  oldDefaultStock: PropTypes.string.isRequired,
  oldNotifications: PropTypes.bool.isRequired,
  stocks: PropTypes.array.isRequired,
  setUserChanges: PropTypes.func.isRequired,
  toggleEditForm: PropTypes.func.isRequired,
  proceedUpdate: PropTypes.func.isRequired,
};

export default ProfileEditForm;
