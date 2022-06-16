import './App.css';
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage'


function App() {
  return (

    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/cart' element={<CartPage/>} />
    </Routes>
    
    );
  }
  
  export default App;
