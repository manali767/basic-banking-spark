import { StaticRouter } from "react-router";
import { CREATE_USER , ADD_TO_TRANSFER , HISTORY_ADD} from "../types";


const initialState = {
  users:  [
    {
      "id": Number(1),
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "balance": 1000,
    },
    {
      "id": 2,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "balance": 20000,
    },
    {
      "id": 3,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "balance": 3000,
    },
    {
      "id": 4,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "balance": 4000,
    },
    {
      "id": 5,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "balance": 50000,
    },
    
    {
      "id": 6,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "balance": 60000,
    },
    {
      "id": 7,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "balance": 70000,
    }
  ],

  history: [
    {
      "sender" : "manali",
      "receiver" : "vaishali",
      "amount": 67,
      "date": "4/11/2021, 10:11:13 PM",
    },
    {
      "sender" : "mansi",
      "receiver" : "vaishali",
      "amount": 676,
      "date": "4/11/2021, 10:11:13 PM",
    },
    {
      "sender" : "manali",
      "receiver" : "mansi",
      "amount": 67,
      "date": "4/11/2021, 10:11:13 PM",
    },

  ],
};


  export const userReducer = (state = initialState, action) => {
  
    
    switch (action.type) {
      
      case CREATE_USER:
        return {
         
          users: [action.payload , ...state.users ] 
        }
     

      case ADD_TO_TRANSFER:
        return {
            ...state,
            users: state.users.map(user => user.id === action.payload.id ? action.payload:user),
        }
    
      case HISTORY_ADD:
        return{
          
          ...state,
          history: [action.payload , ...state.history]
        }
        
       default: 
        return state;
    }
    
  };
  