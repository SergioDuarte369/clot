import React from 'react';
import { Switch, Route} from "react-router-dom";

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import signInAndSignOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import Header from "./components/header/header.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";




class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;


  componentDidMount(){
   this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
           this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
           });
        
      });

      }
      this.setState({currentUser: userAuth});

    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
    <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route  path="/shop" component={ShopPage}/>
    <Route  path="/signin" component={signInAndSignOut}/>
    </Switch>
    </div>
  );
  }
}

export default App;
