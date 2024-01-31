import React from 'react'
import './MapCompStyle.css'

const MapComp = () => {
    return (
        <>
            <div className='container d-flex justify-content-between  align-items-center  flex-wrap gap-4 MapFather  '>
                <div className='knowUs d-flex  flex-column gap-3'>
                    <h1 className='H1Map'>Did you know us? </h1>
                    <p className='PMap'>We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. If you are about books,
                        you must to subscribe to our newsletter.</p>
                    <form className='d-flex flex-column gap-4 formFormat'>
                        <input type="text" placeholder='your name' />
                        <input type="email" placeholder='your-email' />
                        <button className='formbtn' type='submit'>Subscribe</button>
                    </form>
                </div>
                <div className="Map  ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13304.809897611505!2d36.26216230030752!3d33.52212101256623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7457726006f%3A0xd47c79c9da4fa091!2sAl%20Mouhajrin%2C%20Damascus%2C%20Syria!5e0!3m2!1sen!2s!4v1705929858917!5m2!1sen!2s"
                        width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
         

        </>
    )
}

export default MapComp



