import React, { useEffect, useState } from 'react';
import './assets/sass/_style.scss';
// import './App.css'
import style from './App.module.scss'
import { 
  Header,
  Burger,
  Logo,
} from './components/utils';
import { 
  tt, 
  logout,
  getVideo,
  getIsMobile,
  getAlbums, 
  getLives,
} from './store/actions';
// import { 
//   deleteLiveItem, 
//   deleteAlbum, 
//   getListProducts, 
//   deleteProduct,
//   getLives, 
  
// } from '../../../store/actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AdminLives, AdminDiscography, AdminShop, AdminVue, Signin, Signup } from './components/admin';
import { 
  BookingContact, 
  Discography,
  Shows,
  Shop,
  Home,
  LandingPage,
} from './components/public';
import { connect } from 'react-redux';

const App = ({
  tt,
  logout,
  getIsMobile,
  isMobile,
  getAlbums,
  getLives,
}) => {
  const [isHome, setIsHome] = useState(false)
  const [history, setHistory] = useState(window.location.pathname);

  useEffect(() => {
    setHistory(window.location.pathname);
    tt();
    getAlbums();
    getLives();
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

  return (
    <div className={style.App}>
      <Logo />
      <Burger />
      {/* background video || img : */}
      <LandingPage isHome={isHome}/>
      <Router>
        <div className={style.menu}>
          <Header />
        </div>
        <div className={style.content}>
          <Switch>
              <Route path="/home" render={() => <Home setIsHome={setIsHome} />} />
              <Route path="/discography" component={Discography} />
              <Route path="/shows" component={Shows} />
              <Route path="/shop" component={Shop} />
              <Route path="/BookingContact" component={BookingContact} />
              <Route path="/admin/vue" component={AdminVue} />
              <Route path="/admin/lives" component={AdminLives}/>
              <Route path="/admin/discography" component={AdminDiscography}/>
              <Route path="/admin/shop" component={AdminShop}/>
              <Route path="/admin/signin" component={Signin}/>
              <Route path="/admin/signup" component={Signup}/>
              <Redirect to='/home' />
          </Switch>
        </div>
      </Router>
     
    </div>
  )
}

export default connect(state => ({
  isMobile: state.landingReducer.isMobile,
}), { 
  tt, 
  logout,
  getVideo,
  getIsMobile,
  getAlbums,
  getLives,
 })(App);
