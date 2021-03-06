import React,{Component} from "react";
import {Routes,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from './components/Default';
import Modal from './components/Modal';
class App extends Component {
  render() {
  return (
  <React.Fragment>
    
   <Navbar/>
  
   <Routes>
     <Route  element={<Default/>} />

   <Route path='/details' element={<Details/>} />
     <Route  path='/' element={<ProductList/>}/>
     <Route path='/cart' element={<Cart/>} />
     
    
   </Routes>
   <Modal/>
  </React.Fragment>

    );
  }
}
export default App;
