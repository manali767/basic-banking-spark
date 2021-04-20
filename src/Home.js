import React from 'react';
import { Link} from 'react-router-dom';
import "./home.css";

 

function Home() {

  
  
    return (

     <div className="home">
           <img src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-gesture-bank-card-data-information-image_19030.jpg" ></img>
          <div className="container">
          <div className="row">
            <div className="give col-lg-4 col-md-6">
           
                <Link to="/Customer" style={{ textDecoration: 'none' }}><h5  style={{ textDecoration: 'none'}}>Customers Details</h5></Link>
                          
                        
            </div>
            <div className="give col-lg-4 col-md-6">
           
                <Link to="/Transfer" style={{ textDecoration: 'none' }}><h5  style={{textDecoration: 'none'}}>Transaction History</h5></Link>
            </div>
            </div>
            </div>
   </div>


     
        
    )
}

export default Home;
