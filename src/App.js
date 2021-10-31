import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Information from './components/Information/Information';
import Interesting from './components/Interesting/Interesting';
import Login from './components/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import ManegeAllOrders from './components/ManegeAllOrders/ManegeAllOrders';
import AddANewService from './components/AddANewService/AddANewService';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/information">
              <Information></Information>
          </Route>
          <Route path="/interesting">
            <Interesting></Interesting>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <PrivateRouter path="/placeOrder">
          <PlaceOrder></PlaceOrder>
          </PrivateRouter>
          <Route path="/manageOrders">
            <ManegeAllOrders></ManegeAllOrders>
          </Route>
          <Route path="/addANewService">
            <AddANewService></AddANewService>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
