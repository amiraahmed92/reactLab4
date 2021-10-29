import { Switch, Route, Redirect } from "react-router-dom";
import { Login, MainPage } from "./pages";
import { ProtectedRoute } from "./components";
import { Users } from "./pages/Users";
import { UserDetails } from "./pages/UserDetails";
import { Home } from './pages/Home';



export const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
      
        <Route path="/login">
          <Login />
          {localStorage.getItem('token') ? <Redirect from='/login' to='/Users' /> : ''}  
        </Route>
        <Route path="/main-page">
          <MainPage />
          
        </Route>
         <Route path="/users/:id">
            <UserDetails />
          </Route>
          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>
          <Route path="/Home">
            <Home />
          </Route>
        
        <Route path="/">
          <Redirect to="/main-page" />
        </Route>
      </Switch>
    </div>
  );
};
