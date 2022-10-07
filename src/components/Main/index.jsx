/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import Login from '../Login';
import SignUp from '../SignUp';
import SearchResults from '../SearchResults';
import Message from '../Message';
import Loading from '../Loading';
import NotFound from '../NotFound';
import Contact from '../StaticPages/Contact';
import Home from '../StaticPages/Home';
import Stock from '../Stock';
import Profile from '../Profile';
import ForgotPassword from '../ForgotPassword';
import About from '../About';
import ResetPassword from '../ResetPassword';
import Legals from '../StaticPages/Legals';

const Main = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const results = useSelector((state) => state.openFoodFacts.results);
  const isLoading = useSelector((state) => state.openFoodFacts.loading);

  return (
    <main className="flex flex-col xs:w-[476px] xs:h-full xs:mx-auto md:w-[680px] lg:w-[768px] xl:w-[896px] pt-[10vh] md:pb-10">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login">
          {!isLogged && <Login />}
          {isLogged && <Redirect to="/stock" />}
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/user">
          {isLogged && <Profile />}
          {!isLogged && <Redirect to="/login" />}
        </Route>
        <Route path="/stock">
          {!isLogged && <Redirect to="/login" />}
          <Stock />
        </Route>
        <Route path="/product">
          {!results.length && !isLoading
          && (
            <Message paddingX="px-6 lg:px-20" paddingY="py-16" align="text-center" lineHeight="leading-8 xl:leading-10" color="text-custom-darkgrey" size="text-base xl:text-lg" weight="font-bold" content="Soit vous êtes arrivé là par hasard, soit votre recherche n'a renvoyé aucun résultat. Pour trouver un produit, vous pouvez utiliser le champ de recherche ou scanner le code barre si vous possédez déjà le produit." />
          )}
          {isLoading && <Loading />}
          {(results.length > 0) && !isLoading && <SearchResults />}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/legal" component={Legals} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        {/* Route resetPassword need fix , cannot get /resetPassword/:token */}
        <Route path="/resetPassword/:token" exact component={ResetPassword} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
