
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Signin } from './page/SignIn';
import { User } from './page/User';
import './App.css'
import { Signup } from './page/SignUp';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path = '/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
