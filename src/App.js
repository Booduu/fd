import React, { useEffect, useState, lazy, Suspense } from 'react';
import './assets/sass/_style.scss';
import style from './App.module.scss'
import { 
  Header,
  Burger,
  Logo,
} from './components/utils';
import { 
  verifyUser, 
  getIsMobile,
  getAlbums, 
  getLives,
  getProducts,
  initializeApp,
} from './store/actions';
import { Loader } from './components/utils';
// import {
//   Switch,
//   Route,
//   Redirect,
//   useLocation,
// } from "react-router-dom";
import { 
  Footer,
} from './components/public';
import { connect, batch } from 'react-redux';
import PropTypes from 'prop-types';

// import { AnimatePresence } from 'framer-motion';




//LAZY LOAD PUBLIC COMPONENTS
const LandingPage = lazy( async() => (await import ('./components/public/landingPage')));
const LazyRoutes = lazy( async() => (await import ('./components/public/LazyRoutes')));

// const Discography = lazy( async() => (await import ('./components/public/discography')));
// const Shows = lazy( async() => (await import ('./components/public/shows')));
// const Shop = lazy( async() => (await import ('./components/public/shop')));
// const BookingContact = lazy(() => import ('./components/public/bookingContact'));

// //LAZY LOAD ADMIN COMPONENTS
// const LiveManage = lazy( async() => (await import ('./components/admin/LiveManage')));
// const ShopManage = lazy( async() => (await import ('./components/admin/ShopManage')));
// const DiscoManage = lazy( async() => (await import ('./components/admin/DiscoManage')));
// const Signin = lazy( async() => (await import ('./components/admin/signin')));



const App = ({
  verifyUser,
  getIsMobile,
  getAlbums,
  getLives,
  auth,
  getProducts,
  initializeApp,
  appLoading,
}) => {
  const [loading, isLoading] = useState(true);
  const [isHome, setIsHome] = useState(false)
  // const location = useLocation();

  useEffect(() => {
    // verifyUser();
    // getAlbums();
    // getLives();
    // getProducts();
    initializeApp()
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  useEffect(() => {
      if(width > 768) {
          getIsMobile(false);
      } else {
          getIsMobile(true);
      }
  }, [width]);

  // useEffect(() => {
  //   isLoading(false);
  // }, []);
  if (appLoading) {
    return <Loader />
  }


  return (
    <div className={style.App}>
      <div className={style.GridContainerApp}>
        <div className={style.topBar}></div>
        <Logo />
        <Burger />
        <Suspense fallback={<Loader />}>
          <LandingPage isHome={isHome}/>
          <div className={style.menu}>
            <Header />
          </div>
          <div className={style.content}>
          <LazyRoutes />
            {/* <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key} > 
                  <Route path="/home" render={() => <Home setIsHome={setIsHome} />} />
                  <Route path="/discography" component={Discography} />
                  <Route path="/shows" component={Shows} />
                  <Route path="/shop" component={Shop} />
                  <Route path="/BookingContact" component={BookingContact} />
                  <Route path="/Mentions" component={Mentions} />
                  <Route path="/admin/signin" component={Signin}/>
                  
                  <Route path="/admin/lives" render={() => auth.isLoggedIn ? <LiveManage /> : <Redirect to='/home' />} />
                  <Route path="/admin/shop" render={() => auth.isLoggedIn ? <ShopManage /> : <Redirect to='/home' />} />
                  <Route path="/admin/disco" render={() => auth.isLoggedIn ? <DiscoManage /> : <Redirect to='/home' />} />
                  <Redirect to='/home' />
                </Switch>
            </AnimatePresence> */}
          </div>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  verifyUser: PropTypes.func.isRequired,
  getIsMobile: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  getLives: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
}

export default connect(state => ({
  auth: state.authentificationReducer.auth,
  appLoading: state.apiDataReducer.appLoading,
}), { 
  verifyUser, 
  getIsMobile,
  getAlbums,
  getLives,
  getProducts,
  initializeApp,
 })(App);


{/* <Route path="/admin/signup" component={Signup}/>  */}
