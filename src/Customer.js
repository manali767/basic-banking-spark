


import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

const Customer = () => {


  const users = useSelector(state => state.user.users);
  console.log(users);
  

return (
    <div className="container">
      <div className="py-4">
    
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
                {
                   users && users.map((product, index) => (
                    <tr >
                      <th scope="row"  key={product.id}>{index + 1}</th>
                      <td>{product.name}</td>
                      <td>{product.username}</td>
                      <td>{product.email}</td>
                      <td>{product.balance}</td>
                      <td>  <Link className="btn btn-outline-dark mr-2" to={`/users/Payment/${product.id}`}>Payment</Link> </td>
                      <td>
                      
                      </td>
                    </tr>
                  ))
                  }
                  
            
          </tbody> 

        </table>
      </div>
    </div>
  );
};

export default Customer;