
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';



function Navbar(){
  
  const navigate = useNavigate();
  const handleLogout = () => {
   
    navigate('/');
  };
  return(
    <div className='menu-container'>
      <ul>
        
        <li className="buton" onClick={handleLogout}>Logout</li>
        <li>
        <Link to="/the-thirtheen">the thirtheen</Link>
        </li>
        <li> <Link to="/Author">Author</Link></li>
        <li> <Link to="/Map">map</Link></li>
        
      </ul>
    </div>
  )
}
export default Navbar;