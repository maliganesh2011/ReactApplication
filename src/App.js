import React, { Component } from 'react';
import logo from './logo.png';
import ss1 from './ss1.png'
import ss2 from './ss2.png'
import ss3 from './ss3.png'
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >Healthy Fruit</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 headerText">
            <img src={ss1}  alt="ss1" />
            <img src={ss2}  alt="ss1" />
            <img src={ss3}  alt="ss1" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <p id="rcorners2">  <h1 className="App-data" >Nutrition fact</h1>
  <div className="abc"> <p className="left">Serving size</p> <p className="right">100g</p></div>
            </p>

            </div>
          </div>
        </div>
      
          {/* <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch> */}
      </div>

    </Router>
    );
  }
}

export default App;
