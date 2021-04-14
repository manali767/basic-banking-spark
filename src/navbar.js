import React from 'react';
import { Link} from 'react-router-dom';

function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Banking</Link>
                    <div >
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
