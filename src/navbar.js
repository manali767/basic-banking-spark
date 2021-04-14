import React from 'react';
import { Link} from 'react-router-dom';

function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Banking</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        {/* <Link className="nav-link " to="/">Home <span class="sr-only">(current)</span></Link> */}
                        <Link className="nav-link" to="/Customer">Customers</Link>
                          <Link className="nav-link" to="/Transfer">Transfer</Link>
                        
                    
                    </div>
                </div>
                </div>
                {/* <Link className="btn btn-outline-light mr-2" to="/users/add">Add a User</Link> */}
            </nav>
        </div>
    )
}

export default navbar;
