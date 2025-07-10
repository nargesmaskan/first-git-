import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import './Dashbord.css';
import Navbar from './Navbar';
import Popup from './Popup';

function Dashbord() {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const history = useNavigate // Initialize useHistory

  const handleClose = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      history('/timeout');
    }, 60000); 

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [history]);

  return (
    <>
      {isPopupVisible && <Popup onClose={handleClose} />}
      <Navbar />
      <div className='dash-bg'>
        <div className='dash-content'>
          <h1 className='h1'>Throne of Glass</h1>
          <div className='summary'>
            <h2>Book Summary:</h2>
            <p>When magic has gone from the world, and a vicious king rules from his throne of glass, an assassin comes to the castle. She does not come to kill, but to win her freedom. If she can defeat twenty-three killers, thieves, and warriors in a competition to find the greatest assassin in the land, she will become the king’s champion and earn her freedom. Her name is Celaena Sardothien – beautiful, deadly, and destined for greatness.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashbord;
