import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip, Button } from 'antd';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Users } from './mockuser.js';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = () => {
    const user = Users.find(user => user.tile === username && user.password === password);
    if (user) {
      navigate('/login');
    } else {
      setErrorMessage('Invalid username or password.');
     
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-bg" />
      <div className="logonform">
        <h1 style={{ color: 'rbg(64, 57, 57)' }}>Throne of Glass</h1>
        <p>UserName:</p>
        <Input
          className="Input"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your username"
          prefix={<UserOutlined style={{ color: 'rgba(133, 31, 70, 0.69)' }} />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        
        <p>Password:</p>
        <Input
          className="Input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
          prefix={<UserOutlined style={{ color: 'rgba(133, 31, 70, 0.69)' }} />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <br />
        <Button onClick={handleLogin} className="Submitbutton">Login</Button>
      </div>
    </div>
  );
}

export default Login;