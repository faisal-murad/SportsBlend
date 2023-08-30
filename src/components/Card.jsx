import React from 'react'

function Card(props) {
    return (
        <div style={{ display: 'flex', margin:'2%' }}>
            <div className='card'>
                <img src={props.image} alt="" />
                <div className='overlaycard'>
                    <h1>SkullMaster</h1>
                </div>
            </div>

        </div>
    )
}

export default Card