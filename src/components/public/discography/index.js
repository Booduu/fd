// import React, { useState } from 'react';
// import style from './Discography.module.scss';
// import pochette from '../../../assets/design/pochettes/Cover-Full-Dub-Rewind.jpg'


// const tab = [
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
//     {
//         name: "ba",
//     },
// ];

// const player = () => {
//     return <div style={{ backgroundColor: 'red' }}></div>
// }

// const Discography = () => {
//     const [openPlay, setOpenPlayer] = useState(false);

//     const displayPlayer = (index) => {
//         setOpenPlayer(!openPlay)
//     }

//     return ( 
//         <div className={style.container}>
//             <div className={[style.flex_container, 'flex_container'].join(' ')}>
//                 {openPlay && player()}
//                 {tab.map((disc, index) => (
//                     <img 
//                         src={pochette} 
//                         className={[style.poster, 'poster'].join(' ')} 
//                         onClick={() => displayPlayer(index)}
//                     />
//                 ))}
//             </div>
//         </div>
//      );
// }
 
// export default Discography;


import React, { useState, useEffect } from 'react';
import style from './Discography.module.scss';
import pochette from '../../../assets/design/pochettes/Cover-Full-Dub-Rewind.jpg'
import { wrapGrid } from 'animate-css-grid'
import './animeGrid.css';


const tab = [
    {
        name: "baa",
    },
    {
        name: "baz",
    },
    {
        name: "bae",
    },
    {
        name: "bar",
    },
    {
        name: "bat",
    },
    {
        name: "bay",
    },
    {
        name: "bau",
    },
    {
        name: "bai",
    },
    {
        name: "bao",
    },
    {
        name: "bak",
    },
    {
        name: "baj",
    },
    {
        name: "bav",
    },
];

const Card = () => {
    const [expanded, setExpanded] = useState(false);
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return (
        <div
          class={`card card--${randomNumber} ${
            expanded ? "card--expanded" : ""
          }`}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <div>
            {/* <div className="card__avatar" />
            <div className="card__title" />
            <div className="card__description" /> */}
            <img 
                src={pochette} 
                className='poster'
            />
          </div>
        </div>
      );
}

class Grid extends React.Component {
  componentDidMount() {
    // will automatically clean itself up when dom node is removed
    
    wrapGrid(this.grid, { easing : 'backOut', stagger: 10, duration: 400 });
  }
  random() {
    return Math.floor(Math.random() * 5) + 1;
  }

  render() {
    let classes = "grid";
    Object.keys(this.props.settings)
      .filter(k => this.props.settings[k])
      .forEach(k => (classes += " " + k));
    return (
    <div className={style.container}>
        
            <div className={classes} ref={el => (this.grid = el)}>
                {tab.map(i => <Card key={tab.name}/>)}
            </div>
      
     </div>
    );
  }
}

class Discography extends React.Component {
  state = {
    "grid-gap": false,
    "grid-template-columns": false,
  };

  render() {
    return (
      <div className="p-4">
        <Grid settings={this.state} />
      </div>
    );
  }
}

export default Discography;
