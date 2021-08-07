import React, { useEffect } from 'react'
import Aos from 'aos'
import villagesView from '../media/villagesView.jpg'
import factoryView from '../media/factoryView.jpg'
import stationView from '../media/stationView.jpg'
import baghramyanView from '../media/baghramyanView.jpg'
import oldCar from '../media/oldCar.jpg'
import moonView from '../media/moonView.jpg'
import stoneBridge from '../media/stoneBridge.jpg'
import alaverdiView from '../media/alaverdiView.jpg'

import '../styles/home.style.css'
import '../styles/aos.css'

function HomePage() {

    useEffect(() => {


        Aos.init({ duration: 2000 })

    }, [])


    return (
        <div>
            <div className='head'>
                <h1 >ALAVERDI</h1>
            </div>
            <div className='body'>
                <div className='cont1'>

                    <div className='firstPic' data-aos="fade-right" >
                        <img src={villagesView} />
                    </div>

                    <div className='secondPic' data-aos="fade-left" >
                        <img src={factoryView} />
                    </div>
                    <div className='thirdPic' data-aos="fade-up" >
                        <img src={stationView} />
                    </div>

                    <div className='forthPic' data-aos="fade-up" >
                        <img src={baghramyanView} />
                    </div>

                    <div className='fifthPic' data-aos="fade-up" >
                        <img src={oldCar} />
                    </div>

                    <div className='sixthPic' data-aos="fade-up" >
                        <img src={moonView} />
                    </div>

                    <div className='seventhPic' data-aos="fade-up" >
                        <img src={stoneBridge} />
                    </div>

                    <div className='eighthPic' data-aos="fade-up" >
                        <img src={alaverdiView} />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default HomePage
