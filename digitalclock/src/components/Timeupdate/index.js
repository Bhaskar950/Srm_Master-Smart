import React, { useState } from 'react'
import './index.css'

const Timeupdate = () => {
    let dat = new Date().toLocaleTimeString()
    const [update, setUpdate] = useState(dat)
    const clickHand = () => {
        dat =new Date().toLocaleTimeString()
        setUpdate(dat)
    }
    
    return (
        <div className="time">
            <h1>{update} </h1>
            <button onClick={clickHand}>GET TIME</button>
        </div>
    )
}

export default Timeupdate
