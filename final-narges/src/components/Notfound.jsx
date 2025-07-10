import { Button } from "antd"
import { useNavigate } from "react-router-dom";
import './Notfound.css';
function Notfound(){
    const navigate = useNavigate();

    const goHome = () => {
      navigate('/'); 
    };
    return(
         <div className="alert">
        <h1>404</h1>
        <br />
        <p> seems like this page doesnt exist </p>
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
export default Notfound;