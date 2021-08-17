import './App.css';
import UserList from './UserList';
import AddUser from './AddUser';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <UserList />
        </Route>
      <Route exact path="/adduser">
      <AddUser />
        </Route>
        
      </BrowserRouter>
    </div>

  );
}

export default App;
