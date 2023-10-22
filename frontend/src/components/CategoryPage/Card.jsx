import React from 'react'
import styles from './category.module.css'

function Card(props) {
    return (
        <>
            <div>
                <div style={{ display: 'flex', margin: '2%' }}>
                    <div className={styles.card} style={{ backgroundImage: `url(${props.cardImage})` }}>
                        {/* <img src={props.image} alt="" /> */}
                        <div className={styles.overlaycard} style={{ backgroundImage: `url(${props.overlayImage})` }}>
                            <div className={styles.customize}>
                                <h3>Customize</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.proDetails}>
                    <h1 >{props.name}</h1>
                    {/* <h1 >Football</h1> */}
                    <h1></h1>
                </div>
            </div>
        </>
    )
}

export default Card