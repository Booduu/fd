import React from 'react';
import style from './BookingContact.module.scss';
import fb from '../../../assets/design/picto/fb.svg';
import lin from '../../../assets/design/picto/in.svg';
import sc from '../../../assets/design/picto/sc.svg';
import yt from '../../../assets/design/picto/yt.svg';
import fd_logo from '../../../assets/design/logo/fd_logo.svg';
import aftw_logo from '../../../assets/design/logo/logo_aftrwrk.svg';
import { Logo } from '../../utils/index';

const BookingContact = () => {
    return ( 
        <div className={style.container}>
            <div className={style.flex_container}>
                <div className={style.logos_container}>
                    <div className={[style.logo_container, style.aft_logo].join(' ')}>
                        <div className={style.img_container}>
                            <img className={style.logo1} src={aftw_logo}/>
                        </div>
                        <div>
                            <span>mathias dornin</span>
                            <span>0033 608 673 980</span>
                            <span>matt@aftrwrkprod.fr</span>
                        </div> 
                    </div>
                    <div className={[style.logo_container, style.fd_logo].join(' ')}>
                        <div className={style.img_container}>
                            <img className={style.logo2} src={fd_logo}/>
                        </div>
                        <div>
                            <span>FABIEN ROMAIN</span>
                            <span>0033 678 109 383</span>
                            <span>full.dub.mail@gmail.com</span>
                        </div> 
                    </div>
                </div>
                <div className={style.social_container}>
                    <div className={style.link}>
                        <img src={fb} style={{ width: '30px' }}/>
                        <span>facebook</span>
                    </div>
                    <div className={style.link}>
                        <img src={lin} style={{ width: '30px' }}/>
                        <span>instagram</span>
                    </div>
                    <div className={style.link}>
                        <img src={sc} style={{ width: '30px' }}/>
                        <span>soundcloud</span>
                    </div>
                    <div className={style.link}>
                        <img src={yt} style={{ width: '30px' }}/>
                        <span>youtube</span>
                    </div>
                </div>
            </div>
     </div>
        // <div className={style.container}>
        //     <div className={style.flex_container}>
        //         <div className={style.logo_container}>
        //             <div>
        //                 <img className={style.logo} src={fd_logo}/>
        //                 {/* <Logo name="afterwork"/> */}
        //             </div>
        //             <div>
        //                 <img className={style.logo} src={aftw_logo}/>
        //                 {/* <Logo name="fulldub"/> */}
        //             </div>
        //         </div>
        //         <div className={style.socials_link}>
        //             <div>
        //                 <img src={fb}/>
        //                 <span>facebook</span>
        //             </div>
        //             <div>
        //                 <img src={lin}/>
        //                 <span>instagram</span>
        //             </div>
        //             <div>
        //                 <img src={sc}/>
        //                 <span>soundcloud</span>
        //             </div>
        //             <div>
        //                 <img src={yt}/>
        //                 <span>youtube</span>
        //             </div>
        //         </div>
                
        //     </div>
        //  </div>
     );
}
 
export default BookingContact;