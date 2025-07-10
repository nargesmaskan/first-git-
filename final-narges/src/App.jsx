
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Dashbord from './components/Dashbord'

import Authore from './components/Author'
import Map from './components/Map'
// import PrivateRoute from './components/Privateroute'
import Notfound from './components/Notfound'
import Manon from './components/Manon'
// import DynamicChart from './components/DynamicChart'
import ChartPage from './components/chartpage'
import Timeout from './components/Timeout'



function App() {
 

  return (
    <>



  <BrowserRouter>
      <Routes>
      <Route path="/timeout" element={<Timeout/>} /> 
      <Route path="/chart" element={<ChartPage/>} />
      <Route path="*" element={<Notfound/>} />        
  <Route path='/Author' element={<Authore/>}/>   
  <Route path="/" element={<Login />} />
  <Route path="/login" element={<Dashbord />} />
  <Route path="/Map" element={<Map/>} />
  <Route path="/the-thirtheen" element={<Manon/>} /> 

 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
