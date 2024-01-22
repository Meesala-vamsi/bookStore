
import {React} from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import BookList from './components/BooksList';
import Home from './components/Home';


const App =()=>(
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/bookshelves' component={BookList}/>
  </Switch>
)

export default App;
