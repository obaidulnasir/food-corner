import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop/Shop';

function App() {
  return (
    <div className="">
     <BrowserRouter>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/shop">
            <Shop></Shop>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
