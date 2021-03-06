import React from 'react';
import { Route, Link } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Creatr from "./components/IssCreatr";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="txt-cont">
          <h1>Co-Make <span className="symbol">&copy;</span></h1>
          <p>Make your world the way it should be!</p>
        </div>

        <nav className="main-nav">
        <Link 
            to="/dashboard"
            className="App-link">
            Dashboard
          </Link>
          <Link 
            to="/signup"
            className="App-link"> 
            Sign Up
          </Link>
          <Link 
            to="/login"
            className="App-link">
            Log In
          </Link>

        </nav>
      </header>

      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/comake" component={Creatr} />
      {/* <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae metus commodo ligula dignissim pretium. In scelerisque, tellus et dapibus mattis, purus diam bibendum orci, non elementum justo ante a urna. Vivamus faucibus dictum turpis sed accumsan. Maecenas aliquet tellus quis pretium aliquam. Ut tempor mauris eget iaculis laoreet. Integer eget pretium ipsum. Nulla sed nulla justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed velit nisi, condimentum nec sem non, tincidunt tempus massa.

          Suspendisse ac diam at felis maximus aliquam vitae eget augue. Suspendisse vitae vehicula massa, ut rhoncus ex. Mauris vulputate rutrum erat, quis aliquet sapien tristique sit amet. Mauris eget erat venenatis, gravida libero at, consectetur risus. Fusce vel dolor ac turpis ultrices ullamcorper non sit amet purus. Nullam commodo consectetur neque nec malesuada. Integer hendrerit id urna a pellentesque. Nam euismod ex eros. Vivamus varius nibh erat, pretium egestas arcu viverra eu. Cras commodo dolor non rhoncus consectetur. Donec et efficitur magna. Donec euismod, massa eu finibus sollicitudin, erat diam mollis felis, id accumsan leo neque iaculis nunc. Quisque lacinia, arcu eget finibus tincidunt, dolor mauris sodales diam, at iaculis mauris erat vel velit. Suspendisse ultrices sem non justo fermentum, et suscipit nisi vestibulum. Quisque semper cursus leo, id mollis sem sagittis et.
        </p>
      </div> */}
    </div>
  );
};

export default App;
