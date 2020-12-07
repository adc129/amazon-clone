import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Way of the Fight"
            price={15.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/517XVmp+ZnL._SY344_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="The Art of Doing Science and Engineering: Learning to Learn "
            price={19.36}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/21leVtAEhAL._SX336_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Rocket Man: Elon Musk In His Own Words (In Their Own Words) "
            price={10.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41K9Z-Vt2+L._SX319_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung QB65R 65 inch 4K UHD 3840x2160 LED Commercial Signage Display for Business with HDMI"
            price={1016.47}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81HURS4SyuL._AC_SL1500_.jpg"
          />
          <Product
            id="4903850"
            title="Sharp 70 Class Commercial LCD Display UHD with 400 CD/M2 Brightness and 3000 "
            price={19999.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8177Kti9HaL._AC_SL1500_.jpg"
          />
          <Product
            id="4903850"
            title="Philips frameless monitor, Full HD IPS, 124% sRGB, FreeSync 75Hz, VESA"
            price={1499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61IaP4SiWHL._AC_SL1181_.jpg"
          />
          <Product
            id="4903850"
            title="Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black"
            price={114.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/91K9SyGiyzL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Xbox Series X "
            price={600.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51A41nLe5IL._SL1200_.jpg"
          />
          <Product
            id="90829332"
            title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle, Light & Slim PS4 System, 1TB Hard Drive Charging Station Dock Bundle  "
            price={420.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/610WTfW%2BiVL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
