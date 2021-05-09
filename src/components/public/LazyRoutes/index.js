import React, { useState, lazy } from 'react';
import {
    Home,
    Mentions,
    LandingPage,
    Discography,
    Shows,
    Shop,
    BookingContact,
} from '../index.js';
import { 
  // Signup,
  Signin,
  LiveManage,
  ShopManage,
  DiscoManage,
} from '../../admin';
import {
    Switch,
    Route,
    Redirect,
    useLocation,
  } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { connect } from 'react-redux';


// const Discography = lazy( async() => (await import ('../discography')));
// const Shows = lazy( async() => (await import ('../shows')));
// const Shop = lazy( async() => (await import ('./components/public/shop')));
// const BookingContact = lazy(() => import ('./components/public/bookingContact'));

const LazyRoutes = ({
  auth,
}) => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false)

    return (  
    <AnimatePresence exitBeforeEnter>
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
    </AnimatePresence>
    )
    ;
}
 
export default connect(state => ({
  auth: state.authentificationReducer.auth
}), {})(LazyRoutes);