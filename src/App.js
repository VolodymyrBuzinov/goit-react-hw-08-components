import Phonebook from './phonebook/Phonebook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import StartPage from './startPage/startPage';
import Register from './register/Register';
import Login from './login/Login';
import Links from './Links.jsx';
function App() {
  return (
    <Router>
      <Links/>
      <Switch>
          <Route path="/contacts">
            <Phonebook />
        </Route>
        <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
        </Route>        
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>      
      </Router>
  );
}

export default App;
