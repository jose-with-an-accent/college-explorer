import React from 'react';
import ListPage from './Pages/ListPage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import 'react-router-modal/css/react-router-modal.css';
import './App.css';
import HomePage from './Pages/HomePage';
import NewListPage from './Pages/NewListPage';
import { ModalContainer, ModalRoute } from 'react-router-modal'
import SchoolSearchPage from './Pages/SchoolSearchPage';
import SignInPage from './Pages/SignInPage';
import config from './api/config.json'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth'
import { FirebaseDatabaseProvider } from '@react-firebase/database'
import UserOverviewPage from './Pages/UserOverviewPage';
import TopMenu from './Components/TopMenu';
import OnBoardingPlace from './Pages/OnBoardingPage';
import CollegeDetailPage from './Pages/CollegeDetailPage';
function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <Router>

          <div className="App">
            <TopMenu />

            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/signIn">
              <SignInPage />
            </Route>
            <Route path="/college/:id">
              <CollegeDetailPage />
            </Route>
            <Route path="/schools/search">
              <SchoolSearchPage />
            </Route>
            <Route path="/onboarding">
              <OnBoardingPlace />
            </Route>
            <Route path="/list/">
              <ListPage />
            </Route>
            <Route path="/account">
              <UserOverviewPage />
            </Route>
            <ModalContainer />
          </div>
        </Router>
      </FirebaseDatabaseProvider>
    </FirebaseAuthProvider>
  )
}

export default App;
