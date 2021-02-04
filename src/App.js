import GlobalStyle from "./styles/GlobalStyles"
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Carousel from "./components/HomeCarousel"
import Partners from "./components/Partners"

const App = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Router>
        <Header />
        <Carousel />
        <Partners />
        <Switch>
          <Route></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
