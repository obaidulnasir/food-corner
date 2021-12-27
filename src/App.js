import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/pages/Admin/Admin';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Shop from './components/pages/Shop/Shop';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';

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
        <Route path="/product/:id">
            <SingleProduct></SingleProduct>
        </Route>
        <Route path="/admin33">
            <Admin></Admin>
        </Route>
        <Route path="/login">
            <Login></Login>
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
