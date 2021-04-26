import React from 'react';
import Product from '../../components/product/Product';
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />

            <div className="home__row">
                <Product
                id="1232453"
                title="Plantronics BackBeat GO 810 Wireless Headphones, Active Noise Canceling Over Ear Headphones, Navy Blue"
                price={11.96}
                rating={4}
                image="https://m.media-amazon.com/images/I/61Dhwe5mB1L._AC_UL320_.jpg"
                />
                <Product
                id="3435432"
                title="Apple Magic Keyboard for iPad Air (4th Generation) and iPad Pro 11-inch (2nd Generation) - US English"
                price={12}
                rating={5}
                image="https://m.media-amazon.com/images/I/71fYV0JMoYL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                id="4894343"
                title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                price={15.91}
                rating={3}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
                />
                <Product
                id="0658048"
                title="TracFone iPhone XR 4G LTE Prepaid Smartphone (Locked) - Black - 64GB - Sim Card Included - CDMA"
                price={20.12}
                rating={5}
                image="https://m.media-amazon.com/images/I/71bfERiBXSL._AC_UY218_.jpg"
                />
                <Product
                id="2328239"
                title="Garmin 010-02174-01 Vivoactive 4, GPS Smartwatch, Features Music, Body Energy Monitoring, Animated Workouts, Pulse Ox Sensors and More, Silver with Gray Band"
                price={8.65}
                rating={2}
                image="https://m.media-amazon.com/images/I/519ildldncL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                id="1232453"
                title="Toshiba 43LF421U21 43-inch Smart HD 1080p TV - Fire TV Edition, Released 2021"
                price={299}
                rating={5}
                image="https://m.media-amazon.com/images/I/61piX33QmAL._AC_UY218_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
