import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

  
  
  
} from "react-router-dom";


import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import Track from './components/Track';
import Remove from './components/Remove';
import Learn from './components/Learn';
import Settings from './components/Settings';





class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      name: "",

    }
  }
      



  render() {

  return (
   

    <Router>
      
    
   
      <div>
    
     <div className="cover d-flex justify-content-center align-items-center">
    
    
    
    </div>
   

               
    
    
    
   
               
  
    
    <Switch>

    <Route path="/" exact component={Home} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={(props) => <Login onNameChange={this.onNameChange} {...props}  />} />
    <Route path="/track" exact component={Track} />
    <Route path="/remove" exact component={Remove} />
    <Route path="/learn" exact component={Learn} />
    <Route path="/settings" exact component={Settings} />
    
  
  



    


     



</Switch>



   
    </div>
    </Router>
  );
}
}

export default App;
