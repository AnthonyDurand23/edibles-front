/* eslint-disable camelcase */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Assets
import illustrationSmall from '../../assets/img/profile_illustration_420.jpg';
import illustrationMedium from '../../assets/img/profile_illustration_768.jpg';

// Components
import ProfileEditForm from './ProfileEditForm';

// Action
import {
  toggleEditProfile, setUserChanges, clearUserChanges, updateProfile,
} from '../../redux/actions/user';

const Profile = () => {
  const dispatch = useDispatch();
  const {
    default_stock, email, expiration_date_notification, firstname, lastname,
  } = useSelector((state) => state.user.user);
  const userChanges = useSelector((state) => state.user.userChanges);
  const isEditingProfile = useSelector((state) => state.user.isEditingProfile);
  const stocks = useSelector((state) => state.stock.userStocks);

  return (
    <div className="relative flex flex-col items-center w-4/5 gap-4 p-6 mx-auto my-5 xs:my-10 lg:w-3/5 bg-opacity-30 bg-custom-green-3">
      <img src={illustrationSmall} srcSet={`${illustrationSmall} 420w, ${illustrationMedium} 768w`} className="fixed object-cover left-0 bottom-0 z-[-1] w-full opacity-20 mix-blend-darken" alt="" />
      <h2 className="text-7xl font-ediblesLogo text-custom-darkgrey">Votre profil</h2>
      {!isEditingProfile && (
      <div className="flex flex-col items-center w-4/5 gap-3 p-3 text-lg text-center rounded-tr-md rounded-bl-md bg-opacity-40 bg-custom-darkgrey backdrop-filter backdrop-blur-md rounded-tl-3xl rounded-br-3xl text-custom-cream">
        <div>
          <h3 className="text-xl font-bold text-gray-50">Nom</h3>
          <p>{lastname}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-50">Prénom</h3>
          <p>{firstname}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-50">Adresse Email</h3>
          <p>{email}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-50">Stock par défaut</h3>
          <p>{default_stock}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-50">Notifications</h3>
          <p>{expiration_date_notification ? 'Actives' : 'Inactives'}</p>
        </div>
        <button
          type="button"
          className="inline-block px-8 py-1 mt-3 text-center rounded-lg bg-custom-green-2 text-custom-darkgrey highlight-none"
          onClick={() => dispatch(toggleEditProfile())}
        >
          Modifier
        </button>
      </div>
      )}
      {isEditingProfile
      && (
      <ProfileEditForm
        {...userChanges}
        oldFirstName={firstname}
        oldLastName={lastname}
        oldEmail={email}
        oldDefaultStock={default_stock}
        oldNotifications={expiration_date_notification}
        stocks={stocks}
        setUserChanges={(fieldName, value) => dispatch(setUserChanges(fieldName, value))}
        toggleEditForm={() => {
          dispatch(toggleEditProfile());
          dispatch(clearUserChanges());
        }}
        proceedUpdate={() => dispatch(updateProfile())}
      />
      )}
    </div>
  );
};

export default Profile;
