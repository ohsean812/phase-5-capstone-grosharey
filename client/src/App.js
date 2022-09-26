import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import GroceryDetail from './components/GroceryDetail';
import GroceryList from './components/GroceryList';
import GroceryAddForm from './components/GroceryAddForm';
import GroceryEditForm from './components/GroceryEditForm';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


function App() {

  const history = useHistory()

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    });
  }, [])

  function handleLogin(user) {
    setUser(user)
  }

  function handleLogout() {
    setUser(null)
    // fetch('/logout', {
    //   method: "DELETE"
    // })
    // .then(() => history.push('/'))
  }

  const [comments, setComments] = useState([])

  function fetchAllComments() {
    fetch('/comments')
    .then(resp => resp.json())
    .then(allComments => setComments(allComments))
  }
  useEffect(() => fetchAllComments(), [])

  
  // Update state of App/Home when submitting comment from GroceryDetail
  function updateCommentsMasterState(new_comment){
    setComments((comments) => [...comments, new_comment])
  }


  const [groceries, setGroceries] = useState([])

  function fetchAllGroceries() {
    fetch('/groceries')
    .then(resp => resp.json())
    .then(allGroceries => setGroceries(allGroceries))
  }
  useEffect(() => fetchAllGroceries(), [])

  function replaceUpdatedGrocery(new_grocery){
    let filterdGroceries = groceries.filter(grocery => grocery.id !== new_grocery.id)
    filterdGroceries.push(new_grocery)
    setGroceries(filterdGroceries)
  }

  return (
    <div className="App">
      
      <NavBar user={user} handleLogout={handleLogout} />

      <Switch>

        <Route exact path = "/groceries/new">
          <GroceryAddForm user={user} />
        </Route>

        <Route exact path = "/groceries/:id/edit">
          <GroceryEditForm user={user} replaceUpdatedGrocery={replaceUpdatedGrocery} />
        </Route>

        <Route exact path = "/groceries/:id">
          <GroceryDetail user={user} updateCommentsMasterState={updateCommentsMasterState} />
        </Route>

        <Route exact path = "/groceries">
          <GroceryList user={user} groceries={groceries} setGroceries={setGroceries} />
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
