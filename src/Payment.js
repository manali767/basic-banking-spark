


import React, { useState, useEffect} from "react";

import { useParams } from 'react-router-dom';

import { useDispatch,useSelector} from "react-redux";
import { addToTransfer , historyadd} from "./actions"; 
import { useHistory} from "react-router-dom";

const Payment = () => {
   
    const users = useSelector(state => state.user.users);
    // const product = useSelector((state) => state.product);
    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
       
        const [count, setCount] = useState({});
        const [listreceiver, setListReceiver] = useState([]);
        const [receiver, setReceiver] = useState({});
        const [selectedreceiver, setSelectedreceiver] = useState({});
        const [selecteduser, setSelecteduser] = useState({});
        function handleChange(e) {
            setReceiver(e.target.value);

        }


        useEffect(() => {
            const selectedUser = users.find(user => user.id == id)
            setSelecteduser(selectedUser);
            const listReceiver = users.filter(user => user.id !=  id)
            setListReceiver(listReceiver); 
        }, [id, users])
        console.log(listreceiver);
        useEffect(() => {
            const selectedReceiver = users &&  users.find(prod => prod.id === receiver);    
            setSelectedreceiver(selectedReceiver);
            // setSelectedreceiver({...selectedreceiver , balance : Number(count) + selectedReceiver.balance});
        }, [receiver , users]);

        
         

        function handleBalance(e) {
            setCount(e.target.value);
            // setSelecteduser({ ...selecteduser, balance: Number(selecteduser?.balance)- Number(count) });
            // setSelectedreceiver({...selectedreceiver, balance: Number(selectedreceiver?.balance) + Number(count)})
          }
        
          const handleSubmit = (e) =>{
            // if(Number(count)===0)
            // {
            //     alert("Oops!Zero value cannot be transfered");
            // }
            // else if(Number(count)<0)
            // {
            //     alert("Oops!Negative value cannot be transfered");
            // }
            // else if(Number(selecteduser?.balance) < Number(count))
            // {
            //     alert("Oops!current balance is very low")
            // }
            // else{
            const receiver = {
                id: selectedreceiver?.id,
                name:selectedreceiver?.name,
                username:selectedreceiver?.username,
                email:selectedreceiver?.email,
                balance:Number(selectedreceiver?.balance)+ Number(count )
            }
            const sender = {
                id: selecteduser?.id,
                name:selecteduser?.name,
                username:selecteduser?.username,
                email:selecteduser?.email,
                balance:Number(selecteduser?.balance)- Number(count )
            }
            const historydetails = {
                sender : selecteduser?.name,
                receiver: selectedreceiver?.name,
                amount: count,
                 date: new Date().toLocaleString(),
            } 
           
            addToTransfer(selectedreceiver);
             dispatch(addToTransfer(sender));
             dispatch(addToTransfer(receiver));
             dispatch(historyadd(historydetails));
             alert("Successful Transaction!");
             history.push("/Customer");
          }

         

          
  return (
    
        <div>
            
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <form > 
                         <div className="form-row">
                         {/* onChange={handleChange} */}
                            
                            <div className="form-group col-md-6">
                                <label for="inputState">Transfer to</label>
                              
                                <select id="inputState" className="form-control" onChange={handleChange} >
                                    <option selected>-- Please Select --</option>
                                    { listreceiver.map((prod) => ( 
                                      <option value={ prod.id} > {prod.name} </option>
                                   
                                    ))}
                                </select>  
                               
                            </div>
                               
                          
                            <div className="form-group col-md-6">
                                 <label for="inputBalance">Balance</label>
                                
                                 <input type="number" 
                                        className="form-control"
                                        id="inputBalance" 
                                        
                                        value={count.balance} 
                                        onChange={e => {handleBalance(e) }}
                                />
                                 
                                 {/* onClick={e=> handleClick(e)} */}
                            </div>
                         </div>
                         <a className="btn btn-dark btn-lg"  
                            role="button" 
                            type="submit"
                            onClick={e=> handleSubmit(e)} 
                            > 
                            send 
                        </a>
                     </form>
                   
                    
                 </div>
            </div>
           
            
        </div> 
  );
};

export default Payment;