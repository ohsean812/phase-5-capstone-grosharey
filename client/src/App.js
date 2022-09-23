import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import GroceryDetail from './components/GroceryDetail';
import GroceryList from './components/GroceryList';
import GroceryAddForm from './components/GroceryAddForm';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


function App() {

  const history = useHistory()


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

  function handleLogout() {
    setUser(null)
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() => history.push('/'))
  }


  const [groceries, setGroceries] = useState([])

  function fetchAllGroceries() {
    fetch('/groceries')
    .then(resp => resp.json())
    .then(allGroceries => setGroceries(allGroceries))
  }
  useEffect(() => fetchAllGroceries(), [])


  return (
    <div className="App">
      
      <NavBar user={user} handleLogout={handleLogout} />

      <Switch>

        <Route exact path = "/groceries/new">
          <GroceryAddForm user={user} />
        </Route>

        <Route exact path = "/groceries/:id">
          <GroceryDetail user={user} />
        </Route>

        <Route exact path = "/groceries">
          <GroceryList groceries={groceries} />
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
