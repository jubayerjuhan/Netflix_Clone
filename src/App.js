import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/Homepage";
import { createContext, useState } from 'react';
import Register from './Pages/Register/Register.js';
import SignIn from "./Pages/SignIn/SignIn";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.js';
import Mylist from "./Pages/MyList/Mylist";
import ProfileScreen from "./Pages/ProfileScreen/ProfileScreen";
import { NotFound } from "./Pages/404NotFound/NotFound";
export const LoggedUser = createContext();

function App() {
  const [lgdUserInfo, setLgdUserInfo] = useState({
    isLoggedIn: false,
    ui: { spinner: true },
    myList: []
  });
  console.warn(lgdUserInfo);
  return (
    <LoggedUser.Provider value={[lgdUserInfo, setLgdUserInfo]} >

      {console.log(lgdUserInfo)}
      <Router>
        <Switch>
          <ProtectedRoute exact path="/">
            <Homepage></Homepage>
          </ProtectedRoute>

          <ProtectedRoute path='/user/profile'>
            <ProfileScreen />
          </ProtectedRoute>

          <ProtectedRoute path="/user/my-list">
            <Mylist />
          </ProtectedRoute>

          <Route path='/user/profile'>
            <ProfileScreen></ProfileScreen>
          </Route>

          <Route path="/sign-in" component={SignIn} />
          <Route path="/register" component={Register} />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </LoggedUser.Provider >
  );
}

export default App;
