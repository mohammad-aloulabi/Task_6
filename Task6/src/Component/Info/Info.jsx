import React, { useEffect, useState } from 'react'
import bookimg from './../../assets/imgs/bookid.png'
import nagative from './../../assets/imgs/nagative.svg'
import possitive from './../../assets/imgs/possitive.svg'
import plusDark from './../../assets/imgs/plusDark.png'
import negativeDark from './../../assets/imgs/negativeDark.png'
import './InfoStyle.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import sun from './../../assets/imgs/sun.svg';
import moon from './../../assets/imgs/moon.svg';
import openmagazine from './../../assets/imgs/openmagazine.png';
import circle from './../../assets/imgs/circle.svg';
import BWorldLight from './../../assets/imgs/BWorldLight.png'
import BWorldDark from './../../assets/imgs/BWorldDark.png'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
const Info = () => {
    const [bookInfo, setbookInfo] = useState('');
    const { state } = useLocation();
    const id = state.id;

    const current_theme = localStorage.getItem('current_theme');
    // const [theme, settheme] = useState('light');
    const [theme, settheme] = useState(current_theme ? current_theme : 'light');
    useEffect(() => { localStorage.setItem('current_theme', theme) }, [theme])



    useEffect(() => {

        axios.get(`https://example-data.draftbit.com/books/${id}`)
            .then(res => { setbookInfo(res.data), console.log(res.data) }).catch(err => { console.log(err) })

    }, []);

    return (
        <>
            < NavBar className={`pb-1 ${theme} Navformat`}
                title={[{ ele: "Home", path: '/' }, { ele: "News" }, { ele: "Promotion of the mount " }, { ele: "Plublishs" }, { ele: "Subscribe to the newsletter" }]}
                descriptionDark={'Dark Mode'} descriptionLight={'light Mode'} MoodIcon={moon} sun={sun} logoMagazin={openmagazine} logoCircle={circle} BWorldDark={BWorldDark} BWorldLight={BWorldLight} theme={theme} settheme={settheme}
            />



            <div className={`  container-fluid  d-flex justify-content-between  flex-wrap  align-items-center  bookInfoSect ${theme}`}>
                <div>
                    <img src={bookInfo.image_url} className='girlImg' />
                </div>
                <div className=''>
                    <h1 className={`H1bookName ${theme} `}>{bookInfo.title}</h1>
                    <p className={`autherName ${theme} `}>{bookInfo.authors}</p>
                    <p className={`bookDesc ${theme} `}>{bookInfo.description}</p>
                    <div className='Neg d-flex gap-2 align-items-center mt-5 '>
                        <img src={theme == 'light' ? nagative : negativeDark} className='circle1' />
                        1
                        <img src={theme == 'dark' ? plusDark : possitive} className='circle2' />
                    </div>
                    <div className='bookInfoBtns d-flex flex-wrap  gap-4 mt-4'>
                        <button className='add-Fav'>Add to cart</button>
                        <button className='add-Fav'>Favorite</button>
                    </div>
                    <hr className='HrFormat' />

                    <div className="Dtails d-flex gap-4">
                        <p className='pagetitle'>Pages Number :</p>
                        <p className='pageInfo'>{bookInfo.num_pages}</p>
                    </div>

                    <div className="Dtails d-flex gap-4">
                        <p className='pagetitle'>Rating Count :</p>
                        <p className='pageInfo'>{bookInfo.rating_count}</p>
                    </div>
                    <div className="Dtails d-flex gap-4">
                        <p className='pagetitle'>Reviews:</p>
                        <p className='pageInfo'>{bookInfo.review_count}</p>
                    </div>

                </div>

            </div>

            <Footer theme={theme} settheme={settheme} />
        </>
    )
}

export default Info