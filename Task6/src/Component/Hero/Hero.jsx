import React from 'react'
import './HeroStyle.css'
import book from './../../assets/imgs/book.png'

const Hero = () => {
    return (
        <div className='container d-flex justify-content-between  align-items-center flex-wrap heroFather gap-3'>
            <div className="d-flex flex-column gap-5 ">
                <button className='HeroBtn1'>Author of august</button>
                <h1 className='h1Hero'>Eric-Emanuel Schmitt</h1>
                <p className= 'p-Hero'>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions,
                    and in 2001 he received the title of Chevalier des Arts et des Lettres.
                    His books have been translated into over 40 languages.</p>
                <button className='HeroBtn2'>View his boooks</button>
            </div>

            <div>
                <img src={book} />
            </div>


        </div>
    )
}

export default Hero