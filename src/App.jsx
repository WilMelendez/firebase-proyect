import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginViews from './views/login';
import Home from './views/home';

function App() {


  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route
        path='/'
        element ={<Home/>}/>
        <Route
        path='/login'
        element={<LoginViews/>}/>
      </Routes>
    </BrowserRouter>
    

    
    </>
  )
}

export default App
