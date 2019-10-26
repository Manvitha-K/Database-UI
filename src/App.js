import React, {Component} from 'react';
import {render} from "react-dom";
import Form from "react-jsonschema-form";
import { Route, Switch, Redirect } from 'react-router-dom';
import Movie from './components/movie';
import Review from './components/review';
import Shows from './components/shows';
import Ticket from './components/ticket';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
 render(){
   return (
     <div>
         <Navbar />
                <div className = "content">
                  <Switch>
                    <Route path = "/movies" component = {Movie}></Route>
                    <Route path = "/reviews" component = {Review}></Route>
                    <Route path = "/shows" component = {Shows}></Route>
                    <Route path = "/tickets" component = {Ticket}></Route>
                    <Route path = "/" component = {Home}></Route>
                  </Switch>
                </div>
       
     </div>
   );
 }
}
export default App;
