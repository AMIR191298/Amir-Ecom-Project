import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from  'styled-components'

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div>
      <Sliders {...settings}>
          <div>
            <a><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Luggage/April/BBS/GW/GW_PC_BUNK_BBD_mens_1500x600._CB655222420_.jpg"/></a>
          </div>
          <div>
            <a><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Stores/SL_Clearance/GW/PC_bunk/ClearanceStore_SL_PCBunk_50._CB659141515_.jpg"/></a>
          </div>
          <div>
          <a><img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_JN._CB656273403_.jpg"/></a>
          </div>
          <div>
          <a><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_1500x600._CB661592357_.jpg"/></a>
          </div>
          <div>
          <a><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/April/SUD/MonthEnd/GW/realmePB/P46429742_WLA_SUD_Mobiles-page_April_22nd_DesktopTallHero_1500x600._CB670196661_.jpg"/></a>
          </div>
        </Sliders>
    </div>
  )
}

export default SimpleSlider

const Sliders = styled(Slider)`
    margin-top: 20px;
    height: 200px;
    width: 900px;
    background-color: #5c2e91;
    background-color: #fff;
    color: #fff;
    color: #3498db;
    align-items: center;
    justify-content: center;
    img{
      height: 250px;
      width: 100%;
      background-repeat: no-repeat;
  }
  .slick-dots li.slick-active button:before {
    color: #ffffff;
    font-size: 10px;
  }

.slick-prev:before,
.slick-next:before {
  color: #4b344e;
}
`
