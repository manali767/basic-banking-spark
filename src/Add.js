import React, { useState } from "react";
import { useDispatch} from "react-redux"; 
import { addUser } from "./actions";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
const Add = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [balance, setBalance] = useState();

  

  const onSubmit = e => {
    e.preventDefault();
    const new_user = {
      id: shortid.generate(),
      name: name,
      username: username,
      email: email,
      balance: balance
    }
    dispatch(addUser(new_user));
    
    history.push("/Customer");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
           
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
          
              value={username}
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
            
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter balance"
           
              value={balance}
              onChange={e => setBalance(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
