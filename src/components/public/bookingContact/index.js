import React from 'react';
import style from './BookingContact.module.scss';
import fb from '../../../assets/design/picto/fb.svg';
import lin from '../../../assets/design/picto/in.svg';
import sc from '../../../assets/design/picto/sc.svg';
import yt from '../../../assets/design/picto/yt.svg';
import fd_logo from '../../../assets/design/logo/fd_logo.svg';
import aftw_logo from '../../../assets/design/logo/logo_aftrwrk.svg';
import { SEO } from '../index';
import { motion } from 'framer-motion';


const BookingContact = () => {
    return ( 
    <motion.div 
        initial={{ scaleY: 0, scaleX: 0.6 }} 
        animate={{ scaleY: 1, scaleX: 1 }} 
        exit={{ scaleY: 0, scaleX: 0.6 }}
        transition={{ duration: .4 }}
        className={style.container}
    >
        <SEO title="Booking-contact" />
        <div className={style.flex_container}>
            <div className={style.logos_container}>
                <div className={[style.logo_container, style.aft_logo].join(' ')}>
                    <div className={style.img_container}>
                        <a href="https://aftrwrkprod.fr/" target="blank"className={style.logo1}>
                            <img alt="afterwork contact"  src={aftw_logo}/>
                        </a>
                    </div>
                    <div>
                        <span>mathias dornin</span>
                        <span>0033 608 673 980</span>
                        <span><a href="mailto:matt@aftrwrkprod.fr">matt@aftrwrkprod.fr</a></span>
                    </div> 
                </div>
                <div className={[style.logo_container, style.fd_logo].join(' ')}>
                    <div className={style.img_container}>
                        <img alt="fulldub contact" className={style.logo2} src={fd_logo}/>
                    </div>
                    <div>
                        <span>FABIEN ROMAIN</span>
                        <span>0033 678 109 383</span>
                        <span><a href="mailto:full.dub.mail@gmail.com">full.dub.mail@gmail.com</a></span>
                    </div> 
                </div>
            </div>
            <div className={style.social_container}>
                <div className={style.link}>
                    <a href="https://www.facebook.com/FullDubOfficiel/" target="blank">
                        <img alt="lien facebook" src={fb} style={{ width: '30px' }}/>
                        <span>facebook</span>
                    </a>
                </div>
                <div className={style.link}>
                <a href="https://www.instagram.com/full_dub_official/?hl=fr" target="blank">
                    <img  alt="lien instagram" src={lin} style={{ width: '30px' }}/>
                    <span>instagram</span>
                </a>
                </div>
                <div className={style.link}>
                <a href="https://soundcloud.com/full-dub-1" target="blank">
                    <img  alt="lien soundcloud" src={sc} style={{ width: '30px' }}/>
                    <span>soundcloud</span>
                </a>
                </div>
                <div className={style.link}>
                <a href="https://www.youtube.com/channel/UCxjFHEtVmTWse7IOPze0vew" target="blank">
                    <img  alt="lien youtube" src={yt} style={{ width: '30px' }}/>
                    <span>youtube</span>
                </a>
                </div>
            </div>
        </div>
    </motion.div>
  );
}
 
export default BookingContact;