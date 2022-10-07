import React from 'react';
import { Link } from 'react-router-dom';

// Design elements
import { BsThreeDots as Separator } from '@react-icons/all-files/bs/BsThreeDots';
import { IoSearchOutline as SearchBarTrigger } from '@react-icons/all-files/io5/IoSearchOutline';
import { IoCameraOutline as ScannerTrigger } from '@react-icons/all-files/io5/IoCameraOutline';
import { useSelector } from 'react-redux';
import logo from '../../../assets/img/logo.png';
import illustrationSmall from '../../../assets/img/home_illustration_420.png';
import illustrationMedium from '../../../assets/img/home_illustration_768.png';
import illustrationLarge from '../../../assets/img/home_illustration_1280.jpg';
import illustrationLargePortrait from '../../../assets/img/home_illustration_1280portrait.png';

import { useWindowSize } from '../../../hooks/useWindowSize';

const Home = () => {
  const { width, height } = useWindowSize();
  const isLogged = useSelector((state) => state.user.isLogged);

  let illustration = '';
  if (width <= 420) illustration = illustrationSmall;
  else if (width > 420 && width <= 768) illustration = illustrationMedium;
  else if (width > 768) {
    if (height >= width) illustration = illustrationLargePortrait;
    else illustration = illustrationLarge;
  }

  return (
    <div className="relative flex flex-col items-center w-full h-full gap-5 lg:mt-6 lg:gap-10">
      <img src={illustration} className="fixed left-0 bottom-0 lg:-bottom-40 xl:-bottom-2/3 z-[-1] w-full opacity-20" alt="" />
      <div className="flex flex-col items-center w-full gap-5 lg:flex-row">
        <img src={logo} alt="logo du site edibles" className="w-3/5 pt-6 lg:w-2/4 xl:w-2/5" />
        <div className="flex flex-col items-center w-full gap-5 lg:bg-white lg:bg-opacity-30 lg:rounded-2xl lg:p-8">
          <p className="w-5/6 text-xl text-center xl:text-2xl lg:w-auto text-custom-darkgrey font-ediblesBodyTitle text-shadow-m">
            <strong>Edibles</strong>
            {' '}
            vous aide à mieux gérer vos réserves de nourriture, au quotidien.
          </p>
          {!isLogged && (
          <>
            <Link to="/login" className="self-center px-4 py-2 text-xl text-center rounded-lg shadow-md xl:text-2xl bg-custom-green-2 text-custom-darkgrey highlight-none">Je me connecte</Link>
            <Link to="/signup" className="self-center px-4 text-base text-center underline text-custom-darkgrey highlight-none">Pas encore inscrit ? Rejoignez-nous !</Link>
          </>
          )}
        </div>
      </div>
      <section className="pt-4">
        <h2 className="w-full pt-4 text-5xl font-medium text-center border-b-2 xl:rounded-tl-[2.5rem] font-ediblesLogo text-custom-darkgrey bg-custom-grey bg-opacity-60 border-custom-brown-2">Comment ça marche ?</h2>
        <ol className="flex flex-col gap-8 px-4 py-4 mt-6 text-lg font-ediblesBody text-custom-darkgrey lg:w-3/4 lg:mx-auto">
          <li className="bg-custom-brown-1 relative px-4 pt-4 pb-2 rounded-xl bg-opacity-40 border-[1px] border-custom-brown-2">
            <span className="absolute top-[-16px] text-xl font-bold ml-6 bg-custom-brown-2 text-custom-grey w-8 h-8 flex justify-center items-center rounded-full">1</span>
            Commencez par vous
            {' '}
            <span className="font-bold text-custom-green-4">créer un compte</span>
            , puis
            {' '}
            <span className="font-bold text-custom-green-4">connectez-vous</span>
            .
          </li>
          <li className="bg-custom-brown-1 relative px-4 pt-4 pb-2 rounded-xl bg-opacity-40 border-[1px] border-custom-brown-2">
            <span className="absolute top-[-16px] text-xl font-bold ml-6 bg-custom-brown-2 text-custom-grey w-8 h-8 flex justify-center items-center rounded-full">2</span>
            Trouvez un produit en scannant son code barre
            {' '}
            <ScannerTrigger className="inline-block text-2xl text-custom-green-4" />
            {' '}
            ou en tapant sa référence dans notre moteur de recherche
            {' '}
            <SearchBarTrigger className="inline-block text-2xl text-custom-green-4" />
            .
          </li>
          <li className="bg-custom-brown-1 relative px-4 pt-4 pb-2 rounded-xl bg-opacity-40 border-[1px] border-custom-brown-2">
            <span className="absolute top-[-16px] text-xl font-bold ml-6 bg-custom-brown-2 text-custom-grey w-8 h-8 flex justify-center items-center rounded-full">3</span>
            Définissez une quantité, une date de péremption, et enfin ajoutez-le à votre stock !
          </li>
        </ol>
      </section>
      <section className="pb-6 md:pb-10">
        <h2 className="w-full pt-4 text-5xl font-medium text-center border-b-2 font-ediblesLogo text-custom-darkgrey bg-custom-grey bg-opacity-60 border-custom-brown-2 ">Fonctionnalités</h2>
        <ul className="px-4 mx-4 mt-6 py-4 text-lg text-center font-ediblesBody text-custom-darkgrey flex flex-col bg-custom-brown-1 bg-opacity-40 border-[1px] border-custom-brown-2 rounded-xl lg:w-3/4 lg:mx-auto">
          <li>
            Créez des
            {' '}
            <strong>stocks personnalisés</strong>
            {' '}
            dans lesquels placer vos produits
            <Separator className="m-auto text-custom-darkgrey" size="3rem" />
          </li>
          <li>
            Gérez facilement le contenu de vos stocks depuis votre
            {' '}
            <strong>espace utilisateur</strong>
            , sur
            {' '}
            <strong>mobile</strong>
            {' '}
            et
            {' '}
            <strong>ordinateur</strong>
            <Separator className="m-auto text-custom-darkgrey" size="3rem" />
          </li>
          <li>
            Recevez des
            {' '}
            <strong>notifications</strong>
            {' '}
            lorsqu&#39;un de vos produits approche de sa date de péremtion
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
