import React, { useEffect, useState } from 'react';
import './assets/sass/_style.scss';
import style from './App.module.scss'
import { 
  Header,
  Burger,
  Logo,
} from './components/utils';
import { 
  tt, 
  getIsMobile,
  getAlbums, 
  getLives,
  getProducts,
} from './store/actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LiveManage, ShopManage, DiscoManage, Signin, Signup } from './components/admin';
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
  getIsMobile,
  getAlbums,
  getLives,
  auth,
  getProducts,
}) => {
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    tt();
    getAlbums();
    getLives();
    getProducts();
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
              <Route path="/admin/signin" component={Signin}/>
             
             <Route path="/admin/lives" render={() => auth.isLoggedIn ? <LiveManage /> : <Redirect to='/home' />} />
             <Route path="/admin/shop" render={() => auth.isLoggedIn ? <ShopManage /> : <Redirect to='/home' />} />
             <Route path="/admin/disco" render={() => auth.isLoggedIn ? <DiscoManage /> : <Redirect to='/home' />} />
              {/* <Route path="/admin/signin" component={Signin}/>*/}
              {/* <Route path="/admin/signup" component={Signup}/>  */}
              <Redirect to='/home' />
          </Switch>
        </div>
      </Router>
     
    </div>
  )
}

export default connect(state => ({
  auth: state.authentificationReducer.auth
}), { 
  tt, 
  getIsMobile,
  getAlbums,
  getLives,
  getProducts,
 })(App);
