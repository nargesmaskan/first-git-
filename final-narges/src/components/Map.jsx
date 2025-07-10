import { useNavigate } from 'react-router-dom';
import './Map.css';
import { RollbackOutlined } from '@ant-design/icons';
import Navbar from './Navbar';

function Map() {
  
  const navigate = useNavigate(); 

  const goToChart = (chartKey) => {
    navigate('/chart', { state: { chartKey } });
  };

  const meow = () => {
    console.log("Button clicked");
    navigate('/login');
  };

  return (
    <>
    <Navbar/>
    <div className="background">
      <button className="circular-button" onClick={() => goToChart("the glass castle")}></button>
      {/* the glass */}
      <button className="circular-button1" onClick={() => goToChart("adaralan")}></button>
      {/* adarlan */}
      <button className="circular-button2" onClick={() => goToChart("teressen1")}></button>
      {/* tereesan */}
      <button className="circular-button3" onClick={() => goToChart("wendelyn")}></button>
      {/* wendelyn */}
      <button className="circular-button4" onClick={meow}>
        <RollbackOutlined />
      </button>
    </div>
    </>
  );
}

export default Map;
