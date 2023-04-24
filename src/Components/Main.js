import React from 'react'
import image from '../assets/image-web-3-desktop.jpg'
import './Main.css'


const Main = () => {
    return (
        <>
            <div className="main-section">
                <div>
                    <img src={image} alt="N/A" />
                </div>
                <div className="description">
                    <h1>The Bright Future Of Web3.0?</h1>
                    <div>
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main