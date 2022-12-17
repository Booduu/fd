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

import { 
  Footer,
} from './components/public';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//LAZY LOAD PUBLIC COMPONENTS
const LandingPage = lazy( async() => (await import ('./components/public/landingPage')));
const LazyRoutes = lazy( async() => (await import ('./components/public/LazyRoutes')));

const App = ({
  getIsMobile,
  initializeApp,
  appLoading,
}) => {
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    initializeApp();
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
