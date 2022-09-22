import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import GroceryDetail from './components/GroceryDetail';
import GroceryList from './components/GroceryList';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


function App() {

  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])

  function handleLogin(user) {
    setUser(user)
  }


  const history = useHistory()

  function handleLogout() {
    setUser(null)
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() => history.push('/'))
  }

  return (
    <div className="App">
      
      <NavBar user={user} handleLogout={handleLogout} />

      <Switch>

        <Route exact path = "/groceries/:id">
          <GroceryDetail />
        </Route>

        <Route exact path = "/groceries">
          <GroceryList />
        </Route>

        <Route exact path = "/signup">
          <Signup handleLogin={handleLogin} />
        </Route>

        <Route exact path = "/login">
          <Login handleLogin={handleLogin} />
        </Route>

        <Route exact path = "/">
          <Home />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
