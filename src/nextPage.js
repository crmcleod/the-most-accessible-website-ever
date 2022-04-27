import React, { useState, useEffect } from 'react';
import dog from './dog.png'
const NextPage = ({ }) => {

    const [textBlock, setTextBlock] = useState(false)
    const [menu, setMenu] = useState(false)
    // const [menuSlide, setMenuSlide] = useState(false)
    const [picture, setPicture] = useState(false)


    const handleMenuOpen = () => {
        document.querySelector('#menu').style.transform = 'translate(0%)'
    }

    const handleMenuClose = () => {
        document.querySelector('#menu').style.transform = 'translate(100%)'
    }


    return (
        <>
            <div>
                {
                    textBlock &&
                    <p style={{ width: '30%', textAlign: 'justify', marginLeft: '2rem' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat quis tellus in tristique. Ut pellentesque at quam eget auctor. Fusce at congue ante. Cras bibendum urna felis, sit amet auctor erat lacinia quis. Integer at nisl sed nisl mattis vestibulum sed in orci. Nunc laoreet elementum massa quis faucibus. Integer nec tellus non ex aliquam pharetra vel eu augue. Praesent eu nibh id urna semper facilisis elementum id nisl. Proin id efficitur arcu, id posuere nunc. Mauris et commodo massa, ut blandit neque.
                    </p>
                }
                {
                    menu &&
                    <div onClick={handleMenuOpen} style={{ position: 'fixed', top: '0', right: '0', margin: '3rem' }}>
                        Menu
                    </div>
                }
                {
                    picture &&
                    <img alt='dog' style={{ width: '50%' }} src={dog} />
                }
                <div>
                    <button onClick={() => { setTextBlock(true); setMenu(false); setPicture(false) }}>
                        We've got blocks of text
                    </button>
                    <button onClick={() => { setMenu(true); setTextBlock(false); setPicture(false) }}>
                        We've got menus
                    </button>
                    <button onClick={() => { setPicture(true); setMenu(false); setTextBlock(false) }}>
                        We've got dog pictures!
                    </button>
                </div>
            </div>
            <div id='menu' style={{ position: 'absolute', height: '100vh', width: '30vw', backgroundColor: 'grey', right: '0', transform: 'translate(100%)' }}>
                <span onClick={handleMenuClose}>
                    {'Close   x'}
                </span>

                <div style={{padding: '1rem', marginTop: '10rem'}}>
                    These
                </div>
                <div style={{padding: '1rem'}}>
                    Don't
                </div>
                <div style={{padding: '1rem'}}>
                    Work
                </div>
            </div>
        </>
    )
}
export default NextPage