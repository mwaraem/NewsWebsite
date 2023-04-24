import React from 'react'
import retro from '../assets/image-retro-pcs.jpg'
import laptop from '../assets/image-top-laptops.jpg'
import gaming from '../assets/image-gaming-growth.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <ul className='more-news'>
            <div className='first-item'>
                <div>
                    <img src={retro} alt='N/A' />
                </div>
                <div>
                    <h1>01</h1>
                    <h2>Reviving Retro PCs</h2>
                    <p>What happens when old PCs are given modern upgrades</p>
                </div>
            </div>
            <div className='second-item'>
                <div>
                    <img src={laptop} alt='N/A' />
                </div>
                <div>
                    <h1>02</h1>
                    <h2>Top 10 Laptops of 2022</h2>
                    <p>Our best picks for various needs and budgets</p>
                </div>
            </div>
            <div className='third-item'>
                <div>
                    <img src={gaming} alt='N/A' />
                </div>
                <div>
                    <h1>03</h1>
                    <h2>The Growth of Gaming</h2>
                    <p>How the pandemic has sparked fresh opportunities</p>
                </div>
            </div>
        </ul>
    )
}

export default Footer