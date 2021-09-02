import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import { createContext, useState } from 'react';
import Register from './Pages/Register/Register.js';
import SignIn from "./Pages/SignIn/SignIn";
export const LoggedUser = createContext();

function App() {
  const [lgdUserInfo, setLgdUserInfo] = useState({
    isLoggedIn: false,
  });
  console.log(lgdUserInfo)
  return (
    <LoggedUser.Provider value={[lgdUserInfo, setLgdUserInfo]} >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </LoggedUser.Provider>
  );
}

export default App;
