
import {React} from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import BookList from './components/BooksList';
import Home from './components/Home';
import {RoutingProvider} from './Context/ReactContext';
import CheckOut from './components/CheckOut';
import Login from './components/Login';


const App =()=>{

return(
  
<RoutingProvider>
    <Switch>
    <Route exact path='/login' component={Login}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/bookshelves' component={BookList}/>
      <Route exact path='/checkout' component={CheckOut}/>
    </Switch>
    </RoutingProvider>
)
}

export default App;
