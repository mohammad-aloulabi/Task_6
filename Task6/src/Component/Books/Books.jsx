import React, { useEffect, useState } from 'react'
import './BooksStyle.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Books = ({ icon1, icon2 }) => {
    const [Id, setId] = useState("");
    const Navigate = useNavigate();
    function goToInfo(id) {
        setId(id)
        Navigate(`/Info/${id}`, { state: { id } })
    }


    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get("https://example-data.draftbit.com/books?_limit=8")
            .then(res => { setdata(res.data), console.log(res.data) }).catch(err => { console.log(err) })
    }, [])

    return (
        <div className='format'>

            <p className='pTitle'>Selected for you</p>

            <div className="container  d-flex flex-wrap gap-3  align-items-center  ">
                {data?.map((elem, i) => {
                    return (

                        <div className=" booksFormat  align-items-center" key={i}>
                            <img src={elem?.image_url} className=' w-100 imgformat' />
                            <p className='pBook'>{elem?.authors}</p>
                            <div className='d-flex justify-content-between '>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div className='iconformt'><img src={icon1} /></div>
                                    <div className='pageformt'>{elem?.num_pages}</div>
                                </div>
                                <div className='d-flex gap-2 align-items-center '>
                                    <div className="starfomt"><img src={icon2} /></div>
                                    <div className='nmbrformt'>{elem?.rating}</div>
                                </div>
                            </div>

                            <button onClick={() => { goToInfo(elem.id) }} className='bookbtn w-100 '>Show Details</button>
                        </div>

                    )
                })}

            </div>
        </div>

    )
}

export default Books



