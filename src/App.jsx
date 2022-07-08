
import './App.css'

import { Route,Routes,Link,} from 'react-router-dom'
import Tienda from './COMPONENTES/Comerse/Tienda'
import Cart from './COMPONENTES/Comerse/Cart'
import LOGIN from './COMPONENTES/Comerse/LOGIN'



function App() {
 


  return (
    <div className="App">
      
     <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/Tienda/">Tienda</Link></li>
      <li><Link to="/Cart/">Cart</Link></li>
     </ul>

<Routes>

    <Route path='/' element={<LOGIN/>}/>
    <Route path='/Tienda/' element={<Tienda/>}/>
    <Route path='/Cart/' element={<Cart/>}/>

</Routes>
    </div>
  )
}

export default App
