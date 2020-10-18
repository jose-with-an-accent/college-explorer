import React from 'react';
import ListPage from './Pages/ListPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'react-router-modal/css/react-router-modal.css';
import './App.css';
import ReactTooltip from 'react-tooltip'
import HomePage from './Pages/HomePage';
import { ModalContainer } from 'react-router-modal'
import SchoolSearchPage from './Pages/SchoolSearchPage';
import SignInPage from './Pages/SignInPage';
import config from './api/config.json'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import { FirebaseAuthProvider } from '@react-firebase/auth'
import { FirebaseDatabaseProvider } from '@react-firebase/database'
import UserOverviewPage from './Pages/UserOverviewPage';
import TopMenu from './Components/TopMenu';
import OnBoardingPlace from './Pages/OnBoardingPage';
import CollegeDetailPage from './Pages/CollegeDetailPage';
import HelpMainPage from './Pages/HelpMainPage';
import TuitionCalculatorPage from './Pages/TuitionCalculatorPage'
import DeadlinePage from './Pages/DeadlinePage';
import CollegeAdminPage from './Pages/CollegeAdmin';
import AddToListFlow from './Pages/DynamicData/AddToListFlow';
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
            <Route path="/tools/tuition">
              <TuitionCalculatorPage />
            </Route>
            <Route path="/tools/deadlines">
              <DeadlinePage />
            </Route>
            <Route path="/signIn">
              <SignInPage />
            </Route>
            <Route path="/admin">
              <CollegeAdminPage />
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
            <Route path="/info/">
              <HelpMainPage />
            </Route>
            <Route path="/account">
              <UserOverviewPage />
            </Route>
            <Route path="/listFlow/:initialStep/:collegeId">
              <AddToListFlow />
            </Route>
            <ModalContainer />
            <ReactTooltip />

          </div>
        </Router>
      </FirebaseDatabaseProvider>
    </FirebaseAuthProvider>
  )
}

export default App;
