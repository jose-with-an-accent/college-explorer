import React from 'react';
import ListPage from './Pages/ListPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ReactTooltip from 'react-tooltip'
import HomePage from './Pages/HomePage';
import SchoolSearchPage from './Pages/SchoolSearchPage';
import SignInPage from './Pages/SignInPage';
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
    <Router>

      <div className="App">
        <TopMenu />
        <Switch>
          <Route exact path="/" children={HomePage} />
          <Route path="/tools/tuition" component={TuitionCalculatorPage} />
          <Route path="/tools/deadlines" component={DeadlinePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/admin" component={CollegeAdminPage} />
          <Route path="/college/:id" component={CollegeDetailPage} />
          <Route path="/schools/search" component={SchoolSearchPage} />
          <Route path="/onboarding" component={OnBoardingPlace} />
          <Route path="/list/" component={ListPage} />
          <Route path="/info/" component={HelpMainPage} />
          <Route path="/account" component={UserOverviewPage} />
          <Route path="/listFlow/:initialStep/:collegeId" component={AddToListFlow} />
        </Switch>
        <ReactTooltip />

      </div>
    </Router>
  )
}

export default App;
