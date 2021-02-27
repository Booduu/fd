import React, { useState } from 'react';
import style from './Discography.module.scss';
import pochette from '../../../assets/design/pochettes/Cover-Full-Dub-Rewind.jpg'


const tab = [
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
    {
        name: "ba",
    },
];

const player = () => {
    return <div style={{ backgroundColor: 'red' }}></div>
}

const Discography = () => {
    const [openPlay, setOpenPlayer] = useState(false);

    const displayPlayer = (index) => {
        setOpenPlayer(!openPlay)
    }

    return ( 
        <div className={style.container}>
            <div className={[style.flex_container, 'flex_container'].join(' ')}>
                {openPlay && player()}
                {tab.map((disc, index) => (
                    <img 
                        src={pochette} 
                        className={[style.poster, 'poster'].join(' ')} 
                        onClick={() => displayPlayer(index)}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Discography;