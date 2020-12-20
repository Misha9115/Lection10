
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Posts from './components/Posts/Posts';
import Decor from './components/Profaile/Decor';
import ToDo from './components/Todo/ToDo';
import Home from './components/Home/Home';
import Login from './components/Profaile/Login';

function App() {
  return (
    <Router>

      <div className="App">
    <Header/>

        <Switch>

          <Route path="/todos">
         <ToDo/>
          </Route>

          <Route path="/posts">
           <Posts/>
          </Route>
          <Route path="/profile">
            <Decor />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
