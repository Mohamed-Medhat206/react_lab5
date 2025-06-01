import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyNavBar  from './components/Nav';
import Home from './components/Home';
import Movie from './components/Movie';
import Favorite from './components/Favorite';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <MyNavBar />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/movie/:id" component={Movie} exact />
            <Route path="/favorite/" component={Favorite} exact />

          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
