import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm'
import Router from './src/Router';

export default class App extends React.Component {
  componentWillMount(){
    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAB2XYPh3xwUyNr7VxNB5qEa_3cvSEjCTM",
        authDomain: "betaestefania-6d341.firebaseapp.com",
        databaseURL: "https://betaestefania-6d341.firebaseio.com",
        projectId: "betaestefania-6d341",
        storageBucket: "betaestefania-6d341.appspot.com",
        messagingSenderId: "685164230488"
      };
      firebase.initializeApp(config);
  }
   
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
        <Provider store={store}>
        
            <Router />
        </Provider>
      );
  }

}
