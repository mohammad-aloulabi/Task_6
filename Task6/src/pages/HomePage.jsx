import React, { useState } from 'react'
import NavBar from '../Component/NavBar/NavBar'
import Books from '../Component/Books/Books'
import MapComp from '../Component/MapComp/MapComp'
import Footer from '../Component/Footer/Footer'
import moon from './../assets/imgs/moon.svg';
import sun from './../assets/imgs/sun.svg';
import openmagazine from './../assets/imgs/openmagazine.png';
import circle from './../assets/imgs/circle.svg';
import Hero from '../Component/Hero/Hero'
import bookimg from './../assets/imgs/bookid.png'
import bookicon from './../assets/imgs/bookicon.svg'
import star from './../assets/imgs/star.svg'
import BWorldDark from './../assets/imgs/BWorldDark.png'
import BWorldLight from './../assets/imgs/BWorldLight.png'
import './HomePageStyle.css'


const HomePage = () => {

    const [theme, settheme] = useState('light');

    return (

        <div className={`bgAll ${theme}`}>
            < NavBar title={[{ ele: "Home", path: '/' }, { ele: "News" }, { ele: "Promotion of the mount " }, { ele: "Plublishs" }, { ele: "Subscribe to the newsletter" }]}
                descriptionDark={'Dark Mode'} descriptionLight={'light Mode'} MoodIcon={moon} sun={sun} logoMagazin={openmagazine} logoCircle={circle} BWorldDark={BWorldDark} BWorldLight={BWorldLight} theme={theme} settheme={settheme}
            />

            <Hero theme={theme} settheme={settheme}/>
            <Books image={bookimg}
                icon1={bookicon}
                icon2={star}
                theme={theme} settheme={settheme}
            />

            <MapComp theme={theme} settheme={settheme}/>
            <Footer theme={theme} settheme={settheme}/>
        </div>
    )
}

export default HomePage