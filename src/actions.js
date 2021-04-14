import { CREATE_USER , ADD_TO_TRANSFER , HISTORY_ADD} from "./types";
export const addUser = (user) => {
    return{
      type:CREATE_USER, 
      payload: user,
    }
  }
  
  export const addToTransfer = (user) => {
    return{
      type:ADD_TO_TRANSFER, 
      payload: user,
    }
  }

  export const historyadd = (user) => {
      return{
        type:HISTORY_ADD,
        payload: user,
      }
     
    }
  