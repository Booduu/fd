import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
    return (  
        <div className={styles.container}>
            <h4 className={styles.title}>Loading...</h4>
            <div className={styles.loading}>
                <div className={styles.anim}></div>
            </div>
        </div>
    );
}
 
export default Loader;