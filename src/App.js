


import Customer from './Customer';
import Transfer from "./transfer";
import Navbar from "./navbar";
import Home from "./Home";
import Payment from "./Payment";
import Add from "./Add";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider} from "react-redux";

function App() {

  
  
  return (

    <Provider store={store}>
      <Router>
        <div className="App">
         
      
          <Navbar />
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Customer">
              <Customer />
            </Route>
            <Route path="/Transfer">
              <Transfer />
            </Route>
            <Route path="/users/Payment/:id">
              <Payment />
            </Route>

            <Route path="/users/add">
              <Add />
            </Route>
          
          </Switch>
         
         
        </div>
    </Router>
    
    </Provider>
  );
}

export default App;
