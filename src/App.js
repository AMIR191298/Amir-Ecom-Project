import './App.css';
import Home from './components/Pages/Home'
import Cart from './components/Pages/Cart'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>

          <Route path='/cart'>
              <Cart/>

          </Route>
        </Switch>
      </div>

      </Router>
  );
}

export default App;
