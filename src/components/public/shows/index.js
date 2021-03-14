import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import style from './Shows.module.scss';
import moment from 'moment';

moment().format();

const Shows = ({
    lives,
}) => {

    const livesSorted = lives.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    }) 
    console.log('dddd', livesSorted);

    const myLives = useCallback(() => {
        return (
            lives.map((live, index) => (
                <div key={live._id} className={style.date_line}>
                    <span>{moment(live.date).format("DD-MM-YYYY")}</span>
                    / 
                    <span>{`${live.city} - ${live.place}`}</span>
                    / 
                    <span> La bass qui tue festival </span>
                    / 
                    <span className={style.ticket_link}> Ticket</span>
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
}))(Shows);