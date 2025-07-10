import { Button } from "antd"
import { useNavigate } from "react-router-dom";
import './Notfound.css';
function Timeout(){
    const navigate = useNavigate();

    const goHome = () => {
      navigate('/'); 
    };
    return(
         <div className="alert">
        <h1>your time is up </h1>
        <br />
        <p> please login again  </p>
        <br />
        <Button
        onClick={goHome}
          type="primary"
          style={{ backgroundColor: 'rgba(218, 54, 54, 0.38)' }}
          size="large"
         
        >
          go back 
        </Button>
        </div>
        
    )
}
export default Timeout;