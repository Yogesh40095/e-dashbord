import Nav from '../component/Nav'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../component/Footer'
import SignUp from '../component/SignUp'
import PrivateCop from '../component/PrivateCop'
import Lonig from '../component/Login'
import AddProduct from '../component/AddProduct'
import ProductList from '../component/ProductList'
import UpdatePro from '../component/UpdatePro'

function App() {
  return (
    <div className='App'>
      <BrowserRouter> 
      <Nav />
      <Routes>
        
        <Route element={<PrivateCop/>}>
        <Route path='/' element= { <ProductList/>} />
        <Route path='/add' element= { <AddProduct/>} />
        <Route path='/update/:id' element= { <UpdatePro/>} />
        <Route path='/logout' element= { <h1>Loguot</h1>} />
        <Route path='/profile' element= { <h1>Profile Component</h1>} />
        </Route>


        <Route path='/Signup' element= { <SignUp/>} />
        <Route path='/login' element= { <Lonig/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
  )
}
export default App;