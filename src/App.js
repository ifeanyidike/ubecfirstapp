import GlobalStyle from "./styles/GlobalStyles"
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import MainAreaPage from "./pages/MainAreaPage";
import SubjectsPage from "./pages/SubjectsPage";
import TestPanePage from "./pages/TestPanePage";
import ScorePage from "./pages/ScorePage";
import ResultOverviewPage from "./pages/ResultOverviewPage";


const App = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path='/resultoverview' component={ResultOverviewPage} />
          <Route path='/scorepage' component={ScorePage} />
          <Route path='/testpane' component={TestPanePage} />
          <Route path='/subjects' component={SubjectsPage} />
          <Route path='/mainarea' component={MainAreaPage} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
