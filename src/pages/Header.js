import React from 'react'
import Pic1 from "../pic1.jpg"
import Pic2 from "../pic2.jpg"
import Pic3 from "../pic3.jpg"
import { Carousel } from 'react-bootstrap'
import CarouselVideo from '../component/CarouselVideo'
import Footer from "../component/Footer";


const Header = () => {

    
    return (
        <>
        <div className="container">
          <div className="row" style={{"marginTop":"35px"}}>
            <div className="col-sm">
              <h1 style={{"marginTop":"35px","textAlign":"center","fontWeight":"bold","fontFamily":"initial"}}>About Us</h1>
              <h4 style={{"marginTop":"35px","fontFamily":"initial"}}>
                Sport Hub ( live tv ) is a free site for sports streaming,
                LiveTV and livescores. We are pleased to give you the opportunity to
                follow many sporting events from around the world, anywhere on any
                device. Livetv channels covers all major leagues, provides streams
                for all available platforms: online, desktop, mobile. You will also
                receive latest results, match statistics, important kick-off
                notifications for your favorite teams in most competitions.
              </h4>
            </div>
            <div className="col-sm">
              {" "}
              <CarouselVideo />
            </div>
          </div>
        </div>
        <div>
        <Footer/>
        </div>
        </>
      )
}

export default Header
