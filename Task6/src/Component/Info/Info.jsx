import React, { useEffect, useState } from 'react'
import bookimg from './../../assets/imgs/bookid.png'
import nagative from './../../assets/imgs/nagative.svg'
import possitive from './../../assets/imgs/possitive.svg'
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
    useEffect(() => {

        axios.get(`https://example-data.draftbit.com/books/${id}`)
            .then(res => { setbookInfo(res.data), console.log(res.data) }).catch(err => { console.log(err) })
         
        
    }, []);

    return (
        <>
            < NavBar title={[{ ele: "Home", path: '/' }, { ele: "News" }, { ele: "Promotion of the mount " }, { ele: "Plublishs" }, { ele: "Subscribe to the newsletter" }]}
                 descriptionDark={'Dark Mode'} descriptionLight={'light Mode'} MoodIcon={moon} sun={sun} logoMagazin={openmagazine} logoCircle={circle} BWorldDark={BWorldDark} BWorldLight={BWorldLight}
            />

            <div className=' container d-flex justify-content-between  flex-wrap  align-items-center  bookInfoSect'>
                <div>
                    <img src={bookInfo.image_url} className='girlImg' />
                </div>
                <div className='bookInformation'>
                    <h1 className='H1bookName '>{bookInfo.title}</h1>
                    <p className='autherName '>{bookInfo.authors}</p>
                    <p className='bookDesc'>{bookInfo.description}</p>
                    <div className='Neg d-flex gap-2 align-items-center mt-5 '>
                        <img src={nagative} />
                        1
                        <img src={possitive} />
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

            <Footer />
        </>
    )
}

export default Info