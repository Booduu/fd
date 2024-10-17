import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Shows.module.scss';
import moment from 'moment';
import PropTypes from 'prop-types';
import { SEO } from '../index';
import { AnimatePresence, motion } from 'framer-motion';

moment().format();

const Shows = ({
    lives,
}) => {
    const [livesOfCurrentYear, setLivesOfCurrentYear] = useState([]);
    const [livesOfPassedYear, setLivesOfPassedYear] = useState([]);
    const [displayOldLives, setDisplayOldLives] = useState(false);

    useEffect(() => {
        setLivesOfCurrentYear(lives.filter(live => moment(live.date).format("YYYY") >= moment().format("YYYY")));
        setLivesOfPassedYear(lives.filter(live => moment(live.date).format("YYYY") < moment().format("YYYY")));
    }, [lives]);

    const isTicket = (ticket) => {
        if (ticket !== '') {
            return <span className={style.ticket_link}><a href={ticket} target="_blanck" className={style.link}>Tickets</a></span>;
        }
        return false;
    }

    const currentLives = useCallback(() => {
        const year = [];
        return (
            livesOfCurrentYear.map((live, index) => {
                year.push(moment(live.date).format("YYYY"));
                if (year[index] !== year[index - 1]) {
                    
                    return (
                        <div key={live._id} >
                            <div className={[style.title, index !== 0 && style.oldShows].join(' ')}>
                                {index === 0 && <h1>Tour Dates</h1>}
                                <h3>{moment(live.date).format("YYYY")}</h3>
                            </div>
                            <motion.div 
                                key={live._id} 
                                className={style.date_line}
                                initial={{ scaleY: 0 }} 
                                animate={{ scaleY: 1 }} 
                                exit={{ scaleY: 0 }}
                                transition={{ delay: `0.${index}` }}
                            >
                                <span>{moment(live.date).format("MMM D, YYYY")}</span>
                                <span>{`${live.city} - ${live.place}`}</span>
                                <div>
                                    <span>{live.name}</span>
                                    {isTicket(live.ticketLink)}
                                </div>
                            </motion.div>
                        </div>
                    )
                } 
                return (  
                    <motion.div 
                        key={live._id} 
                        className={style.date_line}
                        initial={{ scaleY: 0 }} 
                        animate={{ scaleY: 1 }} 
                        exit={{ scaleY: 0 }}
                        transition={{ delay: `0.${index}` }}
                    >
                        <span>{moment(live.date).format("MMM D, YYYY")}</span>
                        <span>{`${live.city} - ${live.place}`}</span>
                        <div>
                            <span>{live.name}</span>
                            {isTicket(live.ticketLink)}
                        </div>
                    </motion.div>
                )
            })
        );
    }, [livesOfCurrentYear]);

    const passedLives = useCallback(() => {
        const year = [];
        return (
            livesOfPassedYear.map((live, index) => {
                year.push(moment(live.date).format("YYYY"));
                if (year[index] !== year[index - 1]) {
                    
                    return (
                        <div key={live._id} >
                            <div className={[style.title, style.oldShows].join(' ')}>
                                <h3>{moment(live.date).format("YYYY")}</h3>
                            </div>
                            <motion.div 
                                key={live._id} 
                                className={style.date_line}
                                initial={{ scaleY: 0 }} 
                                animate={{ scaleY: 1 }} 
                                exit={{ scaleY: 0 }}
                                transition={{ delay: `0.${index}` }}
                            >
                                <span>{moment(live.date).format("MMM D, YYYY")}</span>
                                <span>{`${live.city} - ${live.place}`}</span>
                                <div>
                                    <span>{live.name}</span>
                                    {isTicket(live.ticketLink)}
                                </div>
                            </motion.div>
                        </div>
                    )
                } 
                return (  
                    <motion.div 
                        key={live._id} 
                        className={style.date_line}
                        initial={{ scaleY: 0 }} 
                        animate={{ scaleY: 1 }} 
                        exit={{ scaleY: 0 }}
                        transition={{ delay: `0.${index}` }}
                    >
                        <span>{moment(live.date).format("MMM D, YYYY")}</span>
                        <span>{`${live.city} - ${live.place}`}</span>
                        <div>
                            <span>{live.name}</span>
                            {isTicket(live.ticketLink)}
                        </div>
                    </motion.div>
                )
            })
        );
    }, [livesOfPassedYear]);



    return ( 
    <motion.div 
        initial={{ scaleY: 0 }} 
        animate={{ scaleY: 1 }} 
        exit={{ scaleY: 0 }}
        transition={{ duration: .4 }}
        className={style.container}
    > 
        <SEO title="Shows"/>
        <div className={style.overlay}>
            <div>
                <div className={style.dates_container}>
                    {currentLives()}
                </div>
                <AnimatePresence>
                    {displayOldLives && (
                        <motion.div 
                            className={style.dates_container}
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                        >
                            {passedLives()}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ delay: 0.8 }}
                className={style.load_more}
                onClick={() => setDisplayOldLives(!displayOldLives)}
            >
                {displayOldLives ? 'HIDE OLD SHOWS' : 'LOAD OLD SHOWS'}
            </motion.div>
        </div>
    </motion.div>
    );
}

 
Shows.propTypes = {
    lives: PropTypes.array.isRequired,
}
 
export default connect(state => ({
    lives: state.apiDataReducer.lives,
}))(Shows);