import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import style from './Shows.module.scss';
import moment from 'moment';

moment().format();

const Shows = ({
    lives,
    isMobile,
}) => {

    // const livesSorted = lives.sort((a, b) => {
    //     return new Date(b.date) - new Date(a.date);
    // }) 
    // console.log('dddd', livesSorted);


    const myLives = useCallback(() => {
        return (
            lives.map((live, index) => (
                <div key={live._id} className={style.date_line}>
                    <span>{moment(live.date).format("MMM D, YYYY")}</span>

                    <span>{`${live.city} - ${live.place}`}</span>

                    <div>
                        <span>{live.name}</span>
                        <span className={style.ticket_link}><a href={live.ticketLink} target="_blanck" className={style.link}>Tickets</a></span>
                    </div>
                   
               </div>
            ))
        );
    }, [lives]);

    return ( 
        <div className={style.container}>
            <div className={style.overlay}>
                <div className={style.dates_container}>
                    {myLives()}
                </div>
                <div className={style.load_more}>LOAD OLD SHOWS</div>
            </div>
        </div>
     );
}
 
export default connect(state => ({
    lives: state.apiDataReducer.lives,
    isMobile: state.landingReducer.isMobile,
}))(Shows);