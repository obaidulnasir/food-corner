import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Admin from './components/pages/Admin/Admin';
import Cart from './components/pages/Cart/Cart';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Profile from './components/pages/Profile/Profile';
import Shop from './components/pages/Shop/Shop';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div className="">
     <AuthProvider>
     <BrowserRouter>
      <Switch>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/product/:id">
            <SingleProduct></SingleProduct>
        </Route>
        <Route path="/admin33">
            <Admin></Admin>
        </Route>
        <Route exact path="/login">
            <Login></Login>
        </Route>
        <Route exact path="/cart">
            <Cart></Cart>
        </Route>
        <Route path="/profile">
            <Profile></Profile>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/shop">
            <Shop></Shop>
        </Route>
      </Switch>
     </BrowserRouter>
     <Footer></Footer>
     </AuthProvider>
     
    </div>
  );
}

export default App;
