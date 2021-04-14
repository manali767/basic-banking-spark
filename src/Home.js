import React from 'react';

import "./home.css";

 

function Home() {

  
  
    return (

     <div className="container">
           <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="5000">
                        <img src="https://media.istockphoto.com/vectors/online-internet-banking-3d-isometric-banner-a-bank-building-with-of-vector-id1202705835?k=6&m=1202705835&s=612x612&w=0&h=7l9imSOPFmrbi6AfmcPSTl9qbkvbSM-7_zb0K17EC9o=" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="5000">
                    <img src="https://www.vhv.rs/dpng/d/361-3610756_iso-9001-benefits-hd-png-download.png" className="d-block w-100" alt="..." />
                    </div>
     </div>              
  </div>


               
        </div>
        
    )
}

export default Home;
