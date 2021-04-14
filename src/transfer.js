import React from 'react';
import { useSelector} from "react-redux";

function Transfer() {

    const users = useSelector(state => state.user.history);
   console.log(users);
    return (
        <div className="container">
         <div className="py-4">
    
    <table className="table border shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Sender</th>
          <th scope="col">Receiver</th>
          <th scope="col">Amount</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
      
            {
               users && users.map((product) => (
                <tr>
                  <td>{product.sender}</td>
                  <td>{product.receiver}</td>
                  <td>{product.amount}</td>
                  <td>{product.date}</td>
                </tr>
              ))
              }
              
        
      </tbody> 

    </table>
  </div>
            
        </div>
    )
}

export default Transfer;
